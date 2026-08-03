#!/usr/bin/env python3
"""
Look Book asset builder.

Reads every capture out of the DFD archive, applies privacy redactions,
writes a ~1600px web copy and a 640px thumb, and reports the real pixel
dimensions so manifest.json can carry correct aspect ratios.

Run:  python3 build.py            (build everything)
      python3 build.py --check    (report only, write nothing)
"""
import os, sys, json
from PIL import Image, ImageOps
from redact import redact

SRC   = "/mnt/user-data/uploads/com~apple~CloudDocs--Chad/Driving For Doors"
OUT   = "/home/claude/lookbook/site"
WEB   = 1600
THUMB = 640

def main(check=False):
    if not check:
        os.makedirs(f"{OUT}/img", exist_ok=True)
        os.makedirs(f"{OUT}/thumb", exist_ok=True)

    rows = []
    for fn in sorted(os.listdir(SRC)):
        if not fn.lower().endswith((".jpg", ".jpeg", ".png")):
            continue
        im = ImageOps.exif_transpose(Image.open(os.path.join(SRC, fn))).convert("RGB")
        im, nredact = redact(im, fn)
        ow, oh = im.size
        base = os.path.splitext(fn)[0] + ".jpg"

        web = im.copy(); web.thumbnail((WEB, WEB), Image.LANCZOS)
        th  = im.copy(); th.thumbnail((THUMB, THUMB), Image.LANCZOS)

        if not check:
            web.save(f"{OUT}/img/{base}",   "JPEG", quality=82, optimize=True, progressive=True)
            th.save(f"{OUT}/thumb/{base}",  "JPEG", quality=78, optimize=True, progressive=True)

        rows.append({
            "file": base, "orig": f"{ow}x{oh}",
            "w": web.size[0], "h": web.size[1],
            "redactions": nredact,
            "low_res": ow < 1200,
            "web_kb":   None if check else round(os.path.getsize(f"{OUT}/img/{base}")/1024),
            "thumb_kb": None if check else round(os.path.getsize(f"{OUT}/thumb/{base}")/1024),
        })

    print(json.dumps(rows, indent=2))

    # cross-check the manifest's w/h against what we actually produced
    mp = "/home/claude/lookbook/manifest.json"
    if os.path.exists(mp):
        man = json.load(open(mp))
        by = {d["file"]: d for d in man["doors"]}
        problems = []
        for r in rows:
            d = by.get(r["file"])
            if not d:
                problems.append(f"NOT IN MANIFEST: {r['file']}")
            elif (d.get("w"), d.get("h")) != (r["w"], r["h"]):
                problems.append(f"SIZE MISMATCH {r['file']}: manifest {d.get('w')}x{d.get('h')} vs actual {r['w']}x{r['h']}")
        for f in by:
            if f not in {r["file"] for r in rows}:
                problems.append(f"MANIFEST ENTRY WITH NO IMAGE: {f}")
        print("MANIFEST CHECK:", "clean" if not problems else json.dumps(problems, indent=2))

if __name__ == "__main__":
    main(check="--check" in sys.argv)
