# Swiftly Garage Doors - Driving for Doors Look Book

Live page: **https://swiftlygaragedoors.com/look-book**
Assets host: **https://swiftlyparts.github.io/lookbook** (GitHub Pages, this repo, `main` branch, root)

## What lives where

| Thing | Where | Notes |
|---|---|---|
| The gallery itself | `lookbook.js` | HTML, CSS and JS in one file. **This file IS the look book.** |
| The door data | `manifest.json` | One entry per capture. Drives the cards, the chips and the lightbox. |
| Web-size images | `img/` | ~1600px long edge, quality 82 |
| Thumbnails | `thumb/` | 640px long edge, quality 78 |
| The Squarespace page | not in this repo | Contains only the two-line loader below |

The Squarespace code block on `/look-book` is exactly this and nothing more:

```html
<div id="sgd-lookbook"></div>
<script src="https://swiftlyparts.github.io/lookbook/lookbook.js"></script>
```

**Never rebuild the gallery by pasting code into Squarespace.** A change to how the look book
looks or behaves is an edit to `lookbook.js` in this repo, committed here. The site picks it
up on the next page load (GitHub Pages caches assets for roughly 10 minutes).

## Config

The only values that normally change live in the CONFIG block at the top of `lookbook.js`:

- `SGD_BASE` - asset root, no trailing slash
- `SGD_PHONE` - digits only. Must match the Google Business Profile / site number.
- `SGD_BOOK` - booking URL. Empty string renders the "Online booking coming soon" placeholder.
- `SGD_FORM` - the Squarespace native contact page

## Adding a capture

This is step 7 of the loop in `Driving_For_Doors_Content_Framework.md`.

1. The capture is already in `Chad/Driving For Doors/` under its production filename.
2. Run `python3 build.py` to produce the web copy and thumb (applies privacy redactions first).
3. Add one entry to the **end** of `doors[]` in `manifest.json`. The gallery reverses the array,
   so newest capture appears first.
4. Commit the new `img/`, `thumb/` and `manifest.json` here.

New `style` or `city` values create their own filter chips automatically. There is no UI work
per capture, by design.

`build.py --check` reports dimensions and cross-checks `manifest.json` against the actual
images without writing anything. It flags size mismatches, manifest entries with no image,
and images with no manifest entry.

## Privacy

Plates, faces and house numbers are redacted before upload. Redaction boxes are stored in
`redact.py` as **fractions of the image**, so they survive any future re-resize. Locations are
neighborhood or crossroads level only, never an address.

## Notes worth keeping

- The lightbox is moved to `document.body` on init. Squarespace wraps the code block in
  ancestors that create a stacking context, which pins a `position:fixed` child below the site
  header no matter how high its z-index is. Portaling to body is the only reliable escape.
- The closed lightbox needs `[hidden]{display:none !important}` to beat its own `display:flex`.
  Without it the invisible overlay swallows every click on the page.
- No opacity fade on card images. It stalls in throttled or backgrounded tabs and leaves grey
  boxes where photos should be.
