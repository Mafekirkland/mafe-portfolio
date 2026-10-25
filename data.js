// Mafe's real content, shared by all three options.
window.MAFE = {
  name: "Mafe Espinosa",
  email: "mafekirklandugc10@gmail.com",
  instagram: { handle: "@mafeespinosa10", url: "https://www.instagram.com/mafeespinosa10/" },
  tiktok: { handle: "@mafeespinosa95", url: "https://www.tiktok.com/@mafeespinosa95" },
  // Her niches, from her Canva portfolio. "has" = videos available for the filter.
  niches: [
    { id: "beauty", en: "Beauty & Skincare", es: "Belleza y skincare" },
    { id: "unbox", en: "Unboxing & Reviews", es: "Unboxing y reseñas" },
    { id: "family", en: "Kids Products", es: "Productos para niños" },
    { id: "home", en: "Home & Organization", es: "Hogar y organización" },
    { id: "tech", en: "Tech Tips", es: "Tips de tecnología" },
    { id: "travel", en: "Hospitality & Local Business", es: "Hospitalidad y negocios locales" },
    { id: "fashion", en: "Fashion", es: "Moda" }
  ],
  // Covers come from her video stills. lang only where the video's on-screen text shows it.
  videos: [
    { img: "img/v-unbox.jpg", src: "vid/unbox.mp4", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792359301/copy_0EF99309-BC08-4A89-9F91-CCEECC418FA6.mov", en: "Skincare unboxing", es: "Unboxing de skincare", c: ["beauty", "unbox"] },
    { img: "img/v-tallow.jpg", src: "vid/tallow.mp4", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792359290/c516ac8138a849f8b78dabe3c9b3362f.mov", en: "Skincare product demo", es: "Demo de producto", c: ["beauty", "unbox"], lang: "ES" },
    { img: "img/v-tryon.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792359296/4fb6671e929d4b00adf561eb0ca95e29.mov", en: "Skincare try-on & benefits", es: "Prueba de skincare y beneficios", c: ["beauty", "unbox"] },
    { img: "img/v-brush.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792367486/1826f25440904c948970f440afed448c.mov", en: "Beauty tutorial", es: "Tutorial de belleza", c: ["beauty"] },
    { img: "img/v-body.jpg", src: "vid/body.mp4", en: "Body care", es: "Cuidado corporal", c: ["beauty"] },
    { img: "img/v-hair.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792963453/6F2D0DF1-9581-4112-A7A6-2590DBFFE634.mov", en: "Hair tool demo", es: "Demo de herramienta para cabello", c: ["hair", "unbox"] },
    { img: "img/v-vigorous.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792359281/1538d2af62344ee184786ba2325377a0.mov", en: "Vigorous hair extensions", es: "Extensiones Vigorous", c: ["hair", "unbox", "fashion"] },
    { img: "img/v-kid.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792358986/copy_C8311624-29F9-4C1E-8B8B-B8BE8F9D90FF.mov", en: "Kids fashion try-on", es: "Prueba de ropa para niños", c: ["family", "fashion"] },
    { img: "img/v-princess.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792963461/copy_1D807723-7FCB-4F18-A948-5E9A49F0EAC4.mov", en: "Princess day experience", es: "Experiencia de princesas", c: ["travel"], lang: "EN" },
    { img: "img/v-home.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792367852/c7681a12bf9149f1b45d13e99c6e169a.mov", en: "Home", es: "Hogar", c: ["home"], lang: "EN" },
    { img: "img/v-tech.jpg", cloud: "https://res.cloudinary.com/vsqztfkp/video/upload/v1792367723/copy_48DBD106-A2E2-49E3-929D-BE248D188CE2.mov", en: "Tech tip", es: "Tip de tecnología", c: ["tech"], lang: "EN" }
  ],
  photos: [
    { img: "img/ugc-serum.jpg", en: "Skincare", es: "Skincare" },
    { img: "img/ugc-stylevibe.jpg", en: "Hair tools unboxing", es: "Unboxing de herramientas para cabello" },
    { img: "img/ugc-mascara-pink.jpg", en: "Makeup", es: "Maquillaje" },
    { img: "img/ugc-robe.jpg", en: "Skincare routine", es: "Rutina de skincare" },
    { img: "img/ugc-mascara-teal.jpg", en: "Makeup", es: "Maquillaje" },
    { img: "img/ugc-brush.jpg", en: "Beauty tools", es: "Herramientas de belleza" }
  ]
};

// Video viewer: plays the video in a phone frame.
window.openVideo = function (v, lang) {
  let lb = document.getElementById("vlb");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "vlb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<div class="vlb-box"><div class="vlb-phone"><img alt=""><video playsinline controls preload="none"></video><p></p></div><button type="button" class="vlb-close"></button></div>';
    document.body.appendChild(lb);
    const close = () => { lb.hidden = true; const vd = lb.querySelector("video"); vd.pause(); vd.removeAttribute("src"); vd.load(); };
    lb.querySelector(".vlb-close").addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    const s = document.createElement("style");
    s.textContent = "#vlb{position:fixed;inset:0;z-index:90;background:rgba(24,16,12,.88);display:grid;place-items:center;padding:24px}#vlb[hidden]{display:none}.vlb-box{width:min(340px,84vw);text-align:center}.vlb-phone{position:relative;aspect-ratio:9/16;border:7px solid #111;border-radius:30px;overflow:hidden;background:#222}.vlb-phone img{width:100%;height:100%;object-fit:cover;filter:brightness(.55)}.vlb-phone video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}.vlb-phone p{position:absolute;inset:auto 18px 38%;margin:0;color:#fff;font:400 14px/1.5 system-ui,sans-serif}.vlb-close{margin-top:16px;padding:12px 26px;border-radius:999px;border:0;background:#F4EDE4;color:#2C211B;font:600 12px system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase;cursor:pointer}";
    document.head.appendChild(s);
  }
  const es = lang === "es";
  lb.querySelector("img").src = v.img || "";
  // Local mp4 first; otherwise a small phone-friendly mp4 from Cloudinary (converted once, then cached).
  const url = v.src || (v.cloud ? v.cloud.replace("/upload/", "/upload/f_mp4,vc_h264,q_auto:eco,w_540/").replace(/\.mov$/i, ".mp4") : "");
  lb.querySelector("p").textContent = es ? "Video disponible pronto." : "Video coming soon.";
  const vd = lb.querySelector("video"), im = lb.querySelector("img"), p = lb.querySelector("p");
  vd.hidden = !url; im.hidden = p.hidden = !!url;
  if (url) {
    im.hidden = p.hidden = false; vd.style.opacity = "0";
    p.textContent = es ? "Cargando video…" : "Loading video…";
    vd.onplaying = () => { vd.style.opacity = "1"; im.hidden = p.hidden = true; };
    vd.src = url; vd.play().catch(() => { vd.style.opacity = "1"; im.hidden = p.hidden = true; });
  }
  lb.querySelector(".vlb-close").textContent = es ? "Cerrar" : "Close";
  lb.hidden = false;
  lb.querySelector(".vlb-close").focus();
};
