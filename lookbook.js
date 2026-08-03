/* Swiftly Garage Doors - Driving for Doors Look Book
   v1.0  2026-08-03
   ------------------------------------------------------------------
   THIS FILE IS THE LOOK BOOK. The Squarespace page only loads it.
   To change the gallery, edit THIS file in swiftlyparts/lookbook and
   commit. The site picks it up on next page load. Never rebuild the
   gallery by pasting code into Squarespace.

   Squarespace code block contains only:
     <div id="sgd-lookbook"></div>
     <script src="https://swiftlyparts.github.io/lookbook/lookbook.js"></script>

   Config lives in the CONFIG block below.
   ------------------------------------------------------------------ */
(function(){
"use strict";

/* ============ CONFIG - the only things that normally change ============ */
var SGD_BASE  = "https://swiftlyparts.github.io/lookbook";  // asset root, no trailing slash
var SGD_PHONE = "6232167185";   // digits only. Must match the GBP / site number.
var SGD_BOOK  = "";             // booking URL. Empty string = "coming soon" placeholder.
var SGD_FORM  = "/contact";     // Squarespace native contact page
/* ====================================================================== */

var MOUNT = document.getElementById("sgd-lookbook");
if(!MOUNT || MOUNT.dataset.sgdInit) return;
MOUNT.dataset.sgdInit = "1";

var CSS = "#sgd-lookbook{--o:#FF6A00;--n:#0D1F3D;--n2:#183A63;--g:#aab6c6;--hair:#eef1f5;\n  font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\n  color:var(--n);line-height:1.45;box-sizing:border-box}\n#sgd-lookbook *,#sgd-lookbook *::before,#sgd-lookbook *::after{box-sizing:inherit}\n#sgd-lookbook .sgd-wrap{display:flex;gap:34px;align-items:flex-start;max-width:1280px;margin:0 auto}\n#sgd-lookbook .sgd-main{flex:1 1 auto;min-width:0}\n\n#sgd-lookbook .sgd-head h2{font-size:30px;line-height:1.15;margin:0 0 8px;color:var(--n);font-weight:700;letter-spacing:-.01em}\n#sgd-lookbook .sgd-head p{font-size:15px;color:var(--n2);margin:0 0 22px;max-width:60ch}\n\n#sgd-lookbook .sgd-filters{border-top:1px solid var(--hair);border-bottom:1px solid var(--hair);padding:14px 0 12px;margin-bottom:22px}\n#sgd-lookbook .sgd-frow{display:flex;align-items:baseline;gap:12px;margin-bottom:9px;flex-wrap:wrap}\n#sgd-lookbook .sgd-frow:last-of-type{margin-bottom:0}\n#sgd-lookbook .sgd-flabel{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--g);font-weight:700;min-width:42px;flex:0 0 auto}\n#sgd-lookbook .sgd-chips{display:flex;flex-wrap:wrap;gap:7px}\n#sgd-lookbook .sgd-chip{font:inherit;font-size:13px;line-height:1;padding:7px 13px;border-radius:999px;\n  border:1px solid #d8dfe8;background:#fff;color:var(--n2);cursor:pointer;transition:.14s ease;white-space:nowrap}\n#sgd-lookbook .sgd-chip:hover{border-color:var(--o);color:var(--n)}\n#sgd-lookbook .sgd-chip[aria-pressed=\"true\"]{background:var(--o);border-color:var(--o);color:#fff;font-weight:600}\n#sgd-lookbook .sgd-count{font-size:12px;color:var(--g);margin-top:11px}\n\n#sgd-lookbook .sgd-grid{columns:3 260px;column-gap:16px}\n#sgd-lookbook .sgd-card{break-inside:avoid;margin:0 0 16px;position:relative;display:block;width:100%;padding:0;border:0;\n  background:#f4f6f9;border-radius:6px;overflow:hidden;cursor:zoom-in;font:inherit;text-align:left;line-height:0}\n#sgd-lookbook .sgd-card img{width:100%;height:auto;display:block;opacity:0;transition:opacity .35s ease}\n#sgd-lookbook .sgd-card img.sgd-in{opacity:1}\n#sgd-lookbook .sgd-meta{position:absolute;left:0;right:0;bottom:0;padding:26px 12px 10px;line-height:1.3;\n  background:linear-gradient(to top,rgba(13,31,61,.86),rgba(13,31,61,0));color:#fff;\n  opacity:0;transition:opacity .18s ease}\n#sgd-lookbook .sgd-card:hover .sgd-meta,#sgd-lookbook .sgd-card:focus-visible .sgd-meta{opacity:1}\n#sgd-lookbook .sgd-meta b{display:block;font-size:13px;font-weight:600}\n#sgd-lookbook .sgd-meta span{display:block;font-size:11.5px;color:#c8d6e8;margin-top:2px}\n#sgd-lookbook .sgd-sentinel{height:1px}\n#sgd-lookbook .sgd-empty{padding:40px 0;color:var(--g);font-size:14px;text-align:center}\n\n#sgd-lookbook .sgd-panel{flex:0 0 288px;position:sticky;top:26px}\n#sgd-lookbook .sgd-panel-inner{border:1px solid var(--hair);border-top:4px solid var(--o);border-radius:6px;padding:22px 20px 20px;background:#fff}\n#sgd-lookbook .sgd-panel-eyebrow{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--o);font-weight:700;margin-bottom:7px}\n#sgd-lookbook .sgd-panel-title{font-size:20px;font-weight:700;color:var(--n);margin-bottom:7px;line-height:1.2}\n#sgd-lookbook .sgd-panel-sub{font-size:13.5px;color:var(--n2);margin:0 0 16px}\n#sgd-lookbook .sgd-btn{display:block;width:100%;text-align:center;padding:12px 14px;border-radius:5px;margin-bottom:9px;\n  font-size:14.5px;font-weight:600;text-decoration:none;transition:.14s ease;border:1.5px solid transparent}\n#sgd-lookbook .sgd-btn-call{background:var(--o);color:#fff}\n#sgd-lookbook .sgd-btn-call:hover{background:#e65f00;color:#fff}\n#sgd-lookbook .sgd-btn-form{background:var(--n);color:#fff}\n#sgd-lookbook .sgd-btn-form:hover{background:var(--n2);color:#fff}\n#sgd-lookbook .sgd-btn-book{background:#fff;color:var(--n);border-color:#d8dfe8}\n#sgd-lookbook .sgd-btn-book:hover{border-color:var(--o);color:var(--n)}\n#sgd-lookbook .sgd-btn-book.sgd-soon{color:var(--g);cursor:default;border-style:dashed}\n#sgd-lookbook .sgd-btn-book.sgd-soon:hover{border-color:#d8dfe8;color:var(--g)}\n#sgd-lookbook .sgd-panel-tag{margin-top:14px;padding-top:13px;border-top:1px solid var(--hair);\n  font-size:10.5px;letter-spacing:.1em;color:var(--g);font-weight:700;text-align:center}\n\n#sgd-lookbook .sgd-lb{position:fixed;inset:0;z-index:9999;background:rgba(13,31,61,.95);\n  display:flex;align-items:center;justify-content:center;padding:44px 60px}\n/* [hidden] must beat the display:flex above or the closed overlay swallows every click on the page */\n#sgd-lookbook .sgd-lb[hidden]{display:none !important}\n#sgd-lookbook .sgd-lb-fig{margin:0;max-width:100%;max-height:100%;display:flex;flex-direction:column;align-items:center;gap:14px}\n#sgd-lookbook .sgd-lb-fig img{max-width:100%;max-height:78vh;display:block;border-radius:4px}\n#sgd-lookbook .sgd-lb-fig figcaption{color:#dfe7f2;font-size:13.5px;text-align:center;max-width:64ch;line-height:1.5}\n#sgd-lookbook .sgd-lb button{position:absolute;background:none;border:0;color:#fff;cursor:pointer;font-family:inherit;opacity:.72;transition:opacity .14s}\n#sgd-lookbook .sgd-lb button:hover{opacity:1}\n#sgd-lookbook .sgd-lb-x{top:14px;right:20px;font-size:38px;line-height:1}\n#sgd-lookbook .sgd-lb-prev,#sgd-lookbook .sgd-lb-next{top:50%;transform:translateY(-50%);font-size:52px;line-height:1;padding:0 14px}\n#sgd-lookbook .sgd-lb-prev{left:6px}\n#sgd-lookbook .sgd-lb-next{right:6px}\n\n@media (max-width:900px){\n  #sgd-lookbook .sgd-wrap{flex-direction:column;gap:0}\n  #sgd-lookbook .sgd-panel{position:static;flex:1 1 auto;width:100%;margin-top:30px}\n  #sgd-lookbook .sgd-grid{columns:2 150px}\n  #sgd-lookbook .sgd-head h2{font-size:25px}\n  #sgd-lookbook .sgd-meta{opacity:1;background:linear-gradient(to top,rgba(13,31,61,.8),rgba(13,31,61,0))}\n  #sgd-lookbook .sgd-lb{padding:24px 12px}\n  #sgd-lookbook .sgd-lb-prev,#sgd-lookbook .sgd-lb-next{font-size:40px;padding:0 6px}\n}";
var HTML = "\n  <div class=\"sgd-wrap\">\n\n    <div class=\"sgd-main\">\n      <div class=\"sgd-head\">\n        <h2>The Look Book</h2>\n        <p>Real garage doors, spotted on real Phoenix-area streets. We drive, we shoot, we log the spec. Find the one that looks like your house.</p>\n      </div>\n\n      <div class=\"sgd-filters\">\n        <div class=\"sgd-frow\" data-group=\"style\"><span class=\"sgd-flabel\">Style</span><span class=\"sgd-chips\" id=\"sgd-chips-style\"></span></div>\n        <div class=\"sgd-frow\" data-group=\"city\"><span class=\"sgd-flabel\">Area</span><span class=\"sgd-chips\" id=\"sgd-chips-city\"></span></div>\n        <div class=\"sgd-count\" id=\"sgd-count\"></div>\n      </div>\n\n      <div class=\"sgd-grid\" id=\"sgd-grid\"></div>\n      <div class=\"sgd-sentinel\" id=\"sgd-sentinel\"></div>\n      <div class=\"sgd-empty\" id=\"sgd-empty\" hidden>No doors match that combination yet. Clear a filter to see more.</div>\n    </div>\n\n    <aside class=\"sgd-panel\">\n      <div class=\"sgd-panel-inner\">\n        <div class=\"sgd-panel-eyebrow\">Swiftly Garage Doors</div>\n        <div class=\"sgd-panel-title\">See one you like?</div>\n        <p class=\"sgd-panel-sub\">We install doors like these across the Phoenix metro. Tell us which one caught your eye.</p>\n        <a class=\"sgd-btn sgd-btn-call\" id=\"sgd-call\" href=\"#\">Call now</a>\n        <a class=\"sgd-btn sgd-btn-form\" id=\"sgd-form\" href=\"/contact\">Send a message</a>\n        <a class=\"sgd-btn sgd-btn-book\" id=\"sgd-book\" href=\"#\">Book an estimate</a>\n        <div class=\"sgd-panel-tag\">FAST. FAIR. FIXED RIGHT.</div>\n      </div>\n    </aside>\n\n  </div>\n\n  <div class=\"sgd-lb\" id=\"sgd-lb\" hidden>\n    <button class=\"sgd-lb-x\" id=\"sgd-lb-x\" aria-label=\"Close\">&times;</button>\n    <button class=\"sgd-lb-prev\" id=\"sgd-lb-prev\" aria-label=\"Previous\">&#8249;</button>\n    <button class=\"sgd-lb-next\" id=\"sgd-lb-next\" aria-label=\"Next\">&#8250;</button>\n    <figure class=\"sgd-lb-fig\">\n      <img id=\"sgd-lb-img\" alt=\"\">\n      <figcaption id=\"sgd-lb-cap\"></figcaption>\n    </figure>\n  </div>\n";

var st = document.createElement("style");
st.textContent = CSS;
document.head.appendChild(st);
MOUNT.innerHTML = HTML;

var root = MOUNT;

  "use strict";

  

  

  var grid  = document.getElementById("sgd-grid"),
      empty = document.getElementById("sgd-empty"),
      count = document.getElementById("sgd-count"),
      sent  = document.getElementById("sgd-sentinel");

  var ALL = [], VIEW = [], shown = 0, PAGE = 12;
  var sel = { style:null, city:null };

  /* ---------- CTA panel ---------- */
  (function(){
    var call = document.getElementById("sgd-call"),
        book = document.getElementById("sgd-book"),
        form = document.getElementById("sgd-form");
    form.href = SGD_FORM;
    var digits = String(SGD_PHONE).replace(/\D/g,"");
    if(digits.length === 10){
      call.href = "tel:+1" + digits;
      call.textContent = "Call " + digits.slice(0,3) + "-" + digits.slice(3,6) + "-" + digits.slice(6);
    } else if(digits.length === 11 && digits.charAt(0) === "1"){
      call.href = "tel:+" + digits;
      call.textContent = "Call " + digits.slice(1,4) + "-" + digits.slice(4,7) + "-" + digits.slice(7);
    } else {
      call.href = SGD_FORM;
      call.textContent = "Contact us";
    }
    if(SGD_BOOK){ book.href = SGD_BOOK; }
    else { book.removeAttribute("href"); book.classList.add("sgd-soon"); book.textContent = "Online booking coming soon"; }
  })();

  /* ---------- load ---------- */
  fetch(SGD_BASE + "/manifest.json", {cache:"no-cache"})
    .then(function(r){ if(!r.ok) throw new Error("manifest " + r.status); return r.json(); })
    .then(function(m){
      ALL = (m.doors || []).slice().reverse();   // newest capture first
      buildChips();
      apply();
    })
    .catch(function(e){
      grid.innerHTML = "";
      empty.hidden = false;
      empty.textContent = "The look book is still loading. Refresh in a moment.";
      if(window.console) console.warn("[look book]", e);
    });

  /* ---------- chips ---------- */
  // neighborhood and city are often the same word (Fountain Hills); never print it twice
  function place(d){
    var parts = [d.neighborhood, d.city].filter(Boolean);
    if(parts.length === 2 && parts[0] === parts[1]) parts.pop();
    return parts.join(", ");
  }

  function uniq(key){
    var seen = {}, out = [];
    ALL.forEach(function(d){
      var v = d[key];
      if(v && !seen[v]){ seen[v] = 1; out.push(v); }
    });
    return out.sort();
  }

  function buildChips(){
    [["style","sgd-chips-style"],["city","sgd-chips-city"]].forEach(function(pair){
      var key = pair[0], host = document.getElementById(pair[1]);
      host.innerHTML = "";
      var vals = uniq(key);
      // "All" always first
      host.appendChild(chip("All", key, null, true));
      vals.forEach(function(v){ host.appendChild(chip(v, key, v, false)); });
    });
  }

  function chip(label, key, value, on){
    var b = document.createElement("button");
    b.type = "button";
    b.className = "sgd-chip";
    b.textContent = label;
    b.setAttribute("aria-pressed", on ? "true" : "false");
    b.addEventListener("click", function(){
      sel[key] = (sel[key] === value) ? null : value;
      var host = b.parentNode;
      Array.prototype.forEach.call(host.children, function(c){
        c.setAttribute("aria-pressed", "false");
      });
      var target = sel[key];
      Array.prototype.forEach.call(host.children, function(c){
        var isAll = (c.textContent === "All");
        if((target === null && isAll) || (target !== null && !isAll && c.textContent === target)){
          c.setAttribute("aria-pressed", "true");
        }
      });
      apply();
    });
    return b;
  }

  /* ---------- filter + stream ---------- */
  function apply(){
    VIEW = ALL.filter(function(d){
      return (!sel.style || d.style === sel.style) && (!sel.city || d.city === sel.city);
    });
    grid.innerHTML = "";
    shown = 0;
    empty.hidden = VIEW.length > 0;
    if(VIEW.length) empty.textContent = "No doors match that combination yet. Clear a filter to see more.";
    count.textContent = VIEW.length === ALL.length
      ? ALL.length + (ALL.length === 1 ? " door" : " doors") + " and counting"
      : "Showing " + VIEW.length + " of " + ALL.length;
    more();
  }

  function more(){
    var end = Math.min(shown + PAGE, VIEW.length);
    for(var i = shown; i < end; i++) grid.appendChild(card(VIEW[i], i));
    shown = end;
  }

  function card(d, idx){
    var b = document.createElement("button");
    b.type = "button";
    b.className = "sgd-card";
    b.setAttribute("aria-label", d.alt || d.model || "Garage door");
    if(d.w && d.h) b.style.aspectRatio = d.w + " / " + d.h;

    var img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = d.alt || "";
    img.src = SGD_BASE + "/thumb/" + d.file;
    if(d.w && d.h){ img.width = d.w; img.height = d.h; }
    img.addEventListener("load", function(){ img.classList.add("sgd-in"); b.style.aspectRatio = ""; });
    img.addEventListener("error", function(){ b.remove(); });

    var meta = document.createElement("div");
    meta.className = "sgd-meta";
    var t = document.createElement("b");
    t.textContent = [d.brand, d.model].filter(Boolean).join(" ") || d.style || "";
    var s = document.createElement("span");
    s.textContent = place(d);
    meta.appendChild(t); meta.appendChild(s);

    b.appendChild(img); b.appendChild(meta);
    b.addEventListener("click", function(){ openLb(idx); });
    return b;
  }

  if("IntersectionObserver" in window){
    new IntersectionObserver(function(es){
      if(es[0].isIntersecting && shown < VIEW.length) more();
    }, {rootMargin:"600px"}).observe(sent);
  } else {
    window.addEventListener("scroll", function(){
      if(shown < VIEW.length && sent.getBoundingClientRect().top < window.innerHeight + 600) more();
    }, {passive:true});
  }

  /* ---------- lightbox ---------- */
  var lb = document.getElementById("sgd-lb"),
      lbImg = document.getElementById("sgd-lb-img"),
      lbCap = document.getElementById("sgd-lb-cap"),
      cur = 0;

  function openLb(i){
    cur = i;
    var d = VIEW[cur];
    if(!d) return;
    lbImg.src = SGD_BASE + "/img/" + d.file;
    lbImg.alt = d.alt || "";
    var head = [d.brand, d.model].filter(Boolean).join(" ");
    var where = place(d);
    lbCap.textContent = [head, where].filter(Boolean).join(" - ") + (d.caption ? ". " + d.caption : "");
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLb(){ lb.hidden = true; lbImg.src = ""; document.body.style.overflow = ""; }
  function step(n){
    if(!VIEW.length) return;
    cur = (cur + n + VIEW.length) % VIEW.length;
    if(cur >= shown) more();
    openLb(cur);
  }

  document.getElementById("sgd-lb-x").addEventListener("click", closeLb);
  document.getElementById("sgd-lb-prev").addEventListener("click", function(e){ e.stopPropagation(); step(-1); });
  document.getElementById("sgd-lb-next").addEventListener("click", function(e){ e.stopPropagation(); step(1); });
  lb.addEventListener("click", function(e){ if(e.target === lb || e.target.tagName === "FIGURE") closeLb(); });
  document.addEventListener("keydown", function(e){
    if(lb.hidden) return;
    if(e.key === "Escape") closeLb();
    else if(e.key === "ArrowLeft") step(-1);
    else if(e.key === "ArrowRight") step(1);
  });

})();
