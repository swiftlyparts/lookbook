import json, os
from PIL import Image, ImageFilter

# Plate redactions, keyed by production filename. Boxes are FRACTIONS of the
# original image (l, t, r, b) so they survive any future re-resize.
# Framework privacy law: no plates, no faces, no house numbers, ever.
REDACT = {
  "driving-for-doors-tortosa-maricopa-clopay-long-panel-tinted-gray.jpg": [
      (0.860, 0.730, 0.978, 0.822)
  ],
}

def redact(im, fn):
    boxes = REDACT.get(fn)
    if not boxes: return im, 0
    im = im.copy()
    w, h = im.size
    for (l, t, r, b) in boxes:
        box = (int(l*w), int(t*h), int(r*w), int(b*h))
        region = im.crop(box)
        # pixelate then blur: unrecoverable, and reads as deliberate not as a smudge
        small = region.resize((max(1,(box[2]-box[0])//12), max(1,(box[3]-box[1])//12)), Image.BILINEAR)
        region = small.resize(region.size, Image.NEAREST).filter(ImageFilter.GaussianBlur(2))
        im.paste(region, box)
    return im, len(boxes)

if __name__ == "__main__":
    fn = "driving-for-doors-tortosa-maricopa-clopay-long-panel-tinted-gray.jpg"
    src = "/mnt/user-data/uploads/com~apple~CloudDocs--Chad/Driving For Doors/" + fn
    im = Image.open(src).convert("RGB")
    out, n = redact(im, fn)
    w,h = out.size
    out.crop((int(w*0.74), int(h*0.62), w, int(h*0.92))).resize((625,540), Image.LANCZOS).save("plate-after.png")
    print("boxes applied:", n)
