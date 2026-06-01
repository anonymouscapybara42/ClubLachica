/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { $ as $$ProductCard } from '../chunks/ProductCard_CA5mtVKA.mjs';
import { o as getSessionUser, h as getCart } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Collection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Collection;
  const user = getSessionUser(Astro2.request);
  const cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  const collections = [
    {
      name: "Fifi Set",
      season: "Sets Collection",
      price: "\u20B11,750",
      description: "A stunning coordinated set that effortlessly blends comfort with style. Perfect for everything from brunch dates to evening outings \u2014 the Fifi Set is your new go-to.",
      heroImg: "/images/products/fifi/IMG_9566.jpeg",
      galleryImgs: [
        "/images/products/fifi/IMG_9574.jpeg",
        "/images/products/fifi/IMG_9606.jpeg",
        "/images/products/fifi/IMG_9633.jpeg",
        "/images/products/fifi/IMG_9635.jpeg"
      ],
      badge: "Sets",
      accent: "text-pink-400"
    },
    {
      name: "Lachica Set",
      season: "Sets Collection",
      price: "\u20B11,750",
      description: "The Lachica Set \u2014 named after the brand itself. Feminine, effortless, and made for the chica who moves through life with quiet confidence and lots of style.",
      heroImg: "/images/products/lachica/IMG_9103.jpeg",
      galleryImgs: [
        "/images/products/lachica/IMG_9145.jpeg",
        "/images/products/lachica/IMG_9165.jpeg",
        "/images/products/lachica/IMG_9168.jpeg"
      ],
      badge: "Sets",
      accent: "text-sage-600"
    },
    {
      name: "Ari Top",
      season: "Tops Collection",
      price: "\u20B1850",
      description: "Soft, flattering, and endlessly versatile \u2014 the Ari Top pairs beautifully with everything. Whether tucked into your favorite skirt or layered over wide-leg pants, this one does it all.",
      heroImg: "/images/products/ari/IMG_3179.jpeg",
      galleryImgs: [
        "/images/products/ari/IMG_3217.jpeg",
        "/images/products/ari/IMG_3231.jpeg",
        "/images/products/ari/IMG_3258.jpeg",
        "/images/products/ari/IMG_3456.jpeg"
      ],
      badge: "Tops",
      accent: "text-amber-500"
    },
    {
      name: "Yoyo Top",
      season: "Tops Collection",
      price: "\u20B1900",
      description: "The Yoyo Top is playful, pretty, and made for real life. With its soft fabric and feminine silhouette, it's the kind of top you'll reach for again and again.",
      heroImg: "/images/products/yoyo/IMG_9659.jpeg",
      galleryImgs: [
        "/images/products/yoyo/IMG_9669.jpeg",
        "/images/products/yoyo/IMG_9684.jpeg",
        "/images/products/yoyo/IMG_9693.jpeg",
        "/images/products/yoyo/IMG_9699.jpeg"
      ],
      badge: "Tops",
      accent: "text-sky-500"
    }
  ];
  const featuredPieces = [
    {
      name: "Fifi Set",
      price: "1,750",
      category: "Sets",
      badge: "Pick",
      images: ["/images/products/fifi/184A1212.jpeg", "/images/products/fifi/184A1220.jpeg"]
    },
    {
      name: "Lachica Set",
      price: "1,750",
      category: "Sets",
      images: ["/images/products/lachica/IMG_9055.jpeg", "/images/products/lachica/IMG_9087.jpeg"]
    },
    {
      name: "Ari Top",
      price: "850",
      category: "Tops",
      images: ["/images/products/ari/IMG_3258.jpeg", "/images/products/ari/IMG_3456.jpeg"]
    },
    {
      name: "Yoyo Top",
      price: "900",
      category: "Tops",
      images: ["/images/products/yoyo/IMG_9673.jpeg", "/images/products/yoyo/IMG_9685.jpeg"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Collection", "activePage": "collection" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "activePage": "collection", "transparent": true, "user": user, "cartCount": cartCount })}  ${maybeRenderHead()}<div class="relative min-h-[70vh] flex items-end overflow-hidden"> <img src="/images/products/fifi/IMG_9631.jpeg" alt="Club La Chica Collection" class="absolute inset-0 w-full h-full object-cover object-top"> <div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40 w-full"> <div class="max-w-2xl"> <p class="text-pink-400 text-xs tracking-[0.4em] uppercase font-body mb-4">All Products</p> <h1 class="font-display text-6xl lg:text-8xl font-light text-white leading-none mb-6">
The<br><span class="italic text-pink-300">Collections</span> </h1> <p class="font-body text-stone-300 text-base leading-relaxed max-w-md">
4 products, endless ways to wear them. Explore the full Club La Chica lineup.
</p> </div> </div> </div>  <section class="py-20 bg-cream"> <div class="max-w-7xl mx-auto px-6 lg:px-8 space-y-28"> ${collections.map((col, i) => renderTemplate`<div${addAttribute(`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`, "class")}> <!-- Visuals --> <div${addAttribute(`${i % 2 === 1 ? "lg:col-start-2" : ""} animate-on-scroll-${i % 2 === 0 ? "left" : "right"}`, "class")}> <!-- Hero image --> <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]"> <img${addAttribute(col.heroImg, "src")}${addAttribute(col.name, "alt")} class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"> <div class="absolute top-5 left-5"> <span class="bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full shadow"> ${col.badge} </span> </div> <div class="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg"> <p class="font-display text-lg font-medium text-stone-800">${col.price}</p> </div> </div> <!-- Gallery strip --> <div class="grid grid-cols-4 gap-2 mt-3"> ${col.galleryImgs.map((img, j) => renderTemplate`<div class="aspect-square rounded-xl overflow-hidden"> <img${addAttribute(img, "src")}${addAttribute(`${col.name} view ${j + 2}`, "alt")} class="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500 cursor-pointer"> </div>`)} </div> </div> <!-- Text --> <div${addAttribute(`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} animate-on-scroll-${i % 2 === 0 ? "right" : "left"}`, "class")}> <span${addAttribute(`text-xs tracking-[0.3em] uppercase font-body font-medium ${col.accent}`, "class")}>${col.season}</span> <h2 class="font-display text-5xl lg:text-6xl font-light text-stone-800 mt-3 mb-4 leading-tight"> ${col.name} </h2> <div class="w-12 h-px bg-gradient-to-r from-pink-300 to-sage-300 mb-6"></div> <p class="font-body text-stone-500 leading-relaxed text-base mb-8"> ${col.description} </p> <div class="bg-white rounded-2xl p-5 mb-8 inline-block"> <p class="text-stone-400 text-xs uppercase tracking-widest font-body mb-1">Price</p> <p class="font-display text-3xl font-light text-pink-500">${col.price}</p> </div> <div class="flex flex-wrap gap-4"> <a href="/catalog" class="btn-primary">Shop ${col.name}</a> <a href="/contact" class="btn-outline">Inquire</a> </div> </div> </div>`)} </div> </section>  <section class="py-20 bg-white"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="text-center mb-12"> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-3 animate-on-scroll">Our Favorites</p> <h2 class="font-display text-4xl lg:text-5xl font-light text-stone-800 animate-on-scroll delay-100">Top Picks</h2> <div class="section-divider mt-4 animate-on-scroll delay-200"></div> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"> ${featuredPieces.map((product, i) => renderTemplate`<div class="group"> ${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product, "index": i })} </div>`)} </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/collection.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/collection.astro";
const $$url = "/collection";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Collection,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
