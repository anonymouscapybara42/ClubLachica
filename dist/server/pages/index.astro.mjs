/* empty css                                 */
import { W as createComponent, a3 as maybeRenderHead, ad as renderTemplate, H as addAttribute, a6 as renderComponent, V as createAstro } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
/* empty css                                 */
import { $ as $$ProductCard } from '../chunks/ProductCard_CA5mtVKA.mjs';
import { o as getSessionUser, h as getCart } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background: linear-gradient(135deg, #FFFFFF 0%, #E5A1C9 50%, #B8D374 100%);" data-astro-cid-bbe6dxrz> <!-- Background gradient mesh --> <div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <div class="absolute top-0 left-0 w-full h-full" style="background: linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(229,161,201,0.2), rgba(184,211,116,0.3));" data-astro-cid-bbe6dxrz></div> <!-- Decorative circles --> <div class="absolute top-10 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style="background: radial-gradient(circle, rgba(229,161,201,0.15) 0%, rgba(184,211,116,0.1) 100%);" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(184,211,116,0.15) 0%, rgba(229,161,201,0.1) 100%); animation: pulse 4s ease-in-out infinite 1s;" data-astro-cid-bbe6dxrz></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style="background: radial-gradient(circle, rgba(229,161,201,0.08) 0%, rgba(255,255,255,0.05) 100%);" data-astro-cid-bbe6dxrz></div> <!-- Grid pattern overlay --> <div class="absolute inset-0" style="background-image: radial-gradient(rgba(0,0,0,0.02) 1px, transparent 1px); background-size: 40px 40px;" data-astro-cid-bbe6dxrz></div> </div> <!-- Main content --> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32" data-astro-cid-bbe6dxrz> <div class="grid lg:grid-cols-2 gap-16 items-center" data-astro-cid-bbe6dxrz> <!-- Left: Text content --> <div data-astro-cid-bbe6dxrz> <!-- Label --> <div class="flex items-center gap-3 mb-8" data-astro-cid-bbe6dxrz> <div class="w-8 h-px bg-pink-500" data-astro-cid-bbe6dxrz></div> <span class="text-pink-600 text-xs tracking-[0.3em] uppercase font-body font-medium" data-astro-cid-bbe6dxrz>New Season 2026</span> </div> <!-- Headline --> <h1 class="font-display font-light text-stone-800 leading-none mb-6" data-astro-cid-bbe6dxrz> <span class="block text-6xl lg:text-7xl xl:text-8xl tracking-tight" style="animation: fadeUp 0.9s ease 0.2s both;" data-astro-cid-bbe6dxrz>
Dress
</span> <span class="block text-6xl lg:text-7xl xl:text-8xl tracking-tight text-pink-500 italic" style="animation: fadeUp 0.9s ease 0.35s both;" data-astro-cid-bbe6dxrz>
Your Story
</span> <span class="block text-6xl lg:text-7xl xl:text-8xl tracking-tight" style="animation: fadeUp 0.9s ease 0.5s both;" data-astro-cid-bbe6dxrz>
Her Way.
</span> </h1> <!-- Subtext --> <p class="font-body text-stone-600 text-base leading-relaxed max-w-md mb-10" style="animation: fadeUp 0.9s ease 0.65s both;" data-astro-cid-bbe6dxrz>
Curated for the modern Filipina — feminine, confident, and effortlessly chic. Discover pieces that celebrate you.
</p> <!-- Buttons --> <div class="flex flex-wrap gap-4" style="animation: fadeUp 0.9s ease 0.8s both;" data-astro-cid-bbe6dxrz> <a href="#products" class="btn-primary" data-astro-cid-bbe6dxrz>
Order Now
</a> <a href="/collection" class="btn-ghost" data-astro-cid-bbe6dxrz>
View Collection
</a> </div> <!-- Stats --> <div class="flex gap-10 mt-14" style="animation: fadeUp 0.9s ease 0.95s both;" data-astro-cid-bbe6dxrz> ${[
    renderTemplate`<!--  { value: '500+', label: 'Styles' },-->
           <!-- { value: '10K+', label: 'Happy Clients' }, -->
            <!-- { value: '5★', label: 'Rated' }, -->`
  ].map((stat) => renderTemplate`<div data-astro-cid-bbe6dxrz> <div class="font-display text-2xl font-light text-stone-800" data-astro-cid-bbe6dxrz>${stat.value}</div> <div class="text-stone-600 text-xs tracking-widest uppercase font-body" data-astro-cid-bbe6dxrz>${stat.label}</div> </div>`)} </div> </div> <!-- Right: Visual display --> <div class="relative hidden lg:block" style="animation: fadeIn 1.2s ease 0.5s both;" data-astro-cid-bbe6dxrz> <!-- Main card --> <div class="relative" data-astro-cid-bbe6dxrz> <!-- Floating badge --> <div class="absolute -top-6 -left-6 z-20 bg-white rounded-2xl p-4 shadow-2xl" style="animation: float 5s ease-in-out infinite;" data-astro-cid-bbe6dxrz> <p class="font-display text-xs text-stone-500 mb-1" data-astro-cid-bbe6dxrz>New Arrival</p> <p class="font-display text-sm font-medium text-stone-800" data-astro-cid-bbe6dxrz>Spring Collection</p> <div class="flex gap-1 mt-2" data-astro-cid-bbe6dxrz> ${["bg-pink-300", "bg-sage-300", "bg-champagne", "bg-stone-200"].map((c) => renderTemplate`<div${addAttribute(`w-4 h-4 rounded-full ${c}`, "class")} data-astro-cid-bbe6dxrz></div>`)} </div> </div> <!-- Main featured model image --> <div class="w-full aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl" data-astro-cid-bbe6dxrz> <img src="/images/products/fifi/184A1220.jpeg" alt="Featured Model" class="w-full h-full object-cover object-top" data-astro-cid-bbe6dxrz> </div> <!-- Side mini cards --> <div class="absolute -right-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl" style="animation: float 5s ease-in-out infinite 1s; width: 130px;" data-astro-cid-bbe6dxrz> <div class="w-full aspect-square rounded-xl img-placeholder bg-gradient-to-br from-sage-200 to-green-100 mb-2 overflow-hidden" data-astro-cid-bbe6dxrz> <div class="flex items-center justify-center h-full" data-astro-cid-bbe6dxrz> <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.8" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-bbe6dxrz></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-bbe6dxrz></circle><polyline points="21 15 16 10 5 21" data-astro-cid-bbe6dxrz></polyline> </svg> </div> </div> <p class="font-display text-xs text-stone-700 leading-tight" data-astro-cid-bbe6dxrz>Fifi Set</p> <p class="text-pink-400 text-xs font-semibold mt-0.5" data-astro-cid-bbe6dxrz>₱1,750</p> </div> <!-- Bottom floating tag --> <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-pink-400 text-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2" style="animation: float 5s ease-in-out infinite 2s;" data-astro-cid-bbe6dxrz> <svg width="14" height="14" fill="white" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-bbe6dxrz></path> </svg> <span class="text-xs font-semibold tracking-wide" data-astro-cid-bbe6dxrz>Editors Choice</span> </div> </div> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600" style="animation: fadeIn 1s ease 1.5s both;" data-astro-cid-bbe6dxrz> <span class="text-xs tracking-widest uppercase font-body" data-astro-cid-bbe6dxrz>Scroll</span> <div class="w-px h-12 bg-gradient-to-b from-stone-600 to-transparent" style="animation: pulse 2s ease-in-out infinite;" data-astro-cid-bbe6dxrz></div> </div> </section> `;
}, "/home/claude/clc-shop/clc-export/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = getSessionUser(Astro2.request);
  const cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  const newArrivals = [
    {
      name: "Fifi Set",
      price: "1,750",
      category: "Sets",
      badge: "New",
      images: [
        "/images/products/fifi/IMG_9362.jpeg",
        "/images/products/fifi/IMG_9370.jpeg"
      ]
    },
    {
      name: "Lachica Set",
      price: "1,750",
      category: "Sets",
      badge: "New",
      images: [
        "/images/products/lachica/IMG_9055.jpeg",
        "/images/products/lachica/IMG_9087.jpeg"
      ]
    },
    {
      name: "Ari Top",
      price: "850",
      category: "Tops",
      badge: "New",
      images: [
        "/images/products/ari/IMG_3179.jpeg",
        "/images/products/ari/IMG_3217.jpeg"
      ]
    },
    {
      name: "Yoyo Top",
      price: "900",
      category: "Tops",
      badge: "New",
      images: [
        "/images/products/yoyo/IMG_9659.jpeg",
        "/images/products/yoyo/IMG_9662.jpeg"
      ]
    }
  ];
  const bestSellers = [
    {
      name: "Fifi Set",
      price: "1,750",
      category: "Sets",
      badge: "Best Seller",
      images: [
        "/images/products/fifi/184A1212.jpeg",
        "/images/products/fifi/184A1220.jpeg"
      ]
    },
    {
      name: "Fifi Set",
      price: "1,750",
      category: "Sets",
      images: [
        "/images/products/fifi/IMG_9418.jpeg",
        "/images/products/fifi/IMG_9420.jpeg"
      ]
    },
    {
      name: "Lachica Set",
      price: "1,750",
      category: "Sets",
      badge: "Popular",
      images: [
        "/images/products/lachica/IMG_9103.jpeg",
        "/images/products/lachica/IMG_9145.jpeg"
      ]
    },
    {
      name: "Ari Top",
      price: "850",
      category: "Tops",
      images: [
        "/images/products/ari/IMG_3231.jpeg",
        "/images/products/ari/IMG_3258.jpeg"
      ]
    },
    {
      name: "Yoyo Top",
      price: "900",
      category: "Tops",
      badge: "Popular",
      images: [
        "/images/products/yoyo/IMG_9669.jpeg",
        "/images/products/yoyo/IMG_9673.jpeg"
      ]
    },
    {
      name: "Fifi Set",
      price: "1,750",
      category: "Sets",
      images: [
        "/images/products/fifi/IMG_9485.jpeg",
        "/images/products/fifi/IMG_9497.jpeg"
      ]
    },
    {
      name: "Lachica Set",
      price: "1,750",
      category: "Sets",
      images: [
        "/images/products/lachica/IMG_9155.jpeg",
        "/images/products/lachica/IMG_9165.jpeg"
      ]
    },
    {
      name: "Yoyo Top",
      price: "900",
      category: "Tops",
      images: [
        "/images/products/yoyo/IMG_9684.jpeg",
        "/images/products/yoyo/IMG_9685.jpeg"
      ]
    }
  ];
  const categories = [
    { name: "Sets", count: "2 styles", gradient: "from-pink-200 to-rose-100", img: "/images/products/fifi/IMG_9606.jpeg" },
    { name: "Tops", count: "2 styles", gradient: "from-sage-200 to-green-100", img: "/images/products/ari/IMG_3456.jpeg" },
    { name: "Fifi Set", count: "\u20B11,750", gradient: "from-amber-100 to-orange-100", img: "/images/products/fifi/184A1526.jpeg" },
    { name: "Yoyo Top", count: "\u20B1900", gradient: "from-sky-100 to-blue-100", img: "/images/products/yoyo/IMG_9699.jpeg" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "activePage": "home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "transparent": true, "user": user, "cartCount": cartCount, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<section class="py-20 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-3 animate-on-scroll" data-astro-cid-j7pv25f6>Shop By Style</p> <h2 class="font-display text-4xl lg:text-5xl font-light text-stone-800 animate-on-scroll delay-100" data-astro-cid-j7pv25f6>Find Your Look</h2> <div class="section-divider mt-4 animate-on-scroll delay-200" data-astro-cid-j7pv25f6></div> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-j7pv25f6> ${categories.map((cat, i) => renderTemplate`<a href="/catalog" class="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer animate-on-scroll block"${addAttribute(`transition-delay: ${i * 0.1}s`, "style")} data-astro-cid-j7pv25f6> <div class="aspect-[3/4] relative overflow-hidden" data-astro-cid-j7pv25f6> <img${addAttribute(cat.img, "src")}${addAttribute(cat.name, "alt")} class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" data-astro-cid-j7pv25f6></div> </div> <div class="absolute bottom-0 left-0 right-0 p-5 text-white" data-astro-cid-j7pv25f6> <p class="font-display text-xl font-light" data-astro-cid-j7pv25f6>${cat.name}</p> <p class="text-white/70 text-xs font-body mt-0.5" data-astro-cid-j7pv25f6>${cat.count}</p> </div> <div class="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/10 transition-colors duration-300 rounded-3xl" data-astro-cid-j7pv25f6></div> </a>`)} </div> </div> </section>  <section id="products" class="py-20 bg-cream" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-3 animate-on-scroll" data-astro-cid-j7pv25f6>Fresh Drops</p> <h2 class="font-display text-4xl lg:text-5xl font-light text-stone-800 animate-on-scroll delay-100" data-astro-cid-j7pv25f6>New Arrivals</h2> <div class="w-14 h-0.5 bg-gradient-to-r from-pink-300 to-sage-300 mt-4 animate-on-scroll delay-200" data-astro-cid-j7pv25f6></div> </div> <a href="/catalog" class="btn-outline mt-6 sm:mt-0 animate-on-scroll" data-astro-cid-j7pv25f6>View All</a> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-astro-cid-j7pv25f6> ${newArrivals.map((product, i) => renderTemplate`<div class="group" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product, "index": i, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> </div> </section>  <section class="relative py-24 overflow-hidden bg-stone-900" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/85 to-stone-900/30 z-10" data-astro-cid-j7pv25f6></div> <!-- Use a real product image as background --> <img src="/images/products/fifi/IMG_9574.jpeg" alt="Club La Chica Collection" class="absolute inset-0 w-full h-full object-cover object-top opacity-60" data-astro-cid-j7pv25f6> </div> <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="max-w-xl" data-astro-cid-j7pv25f6> <span class="inline-block bg-pink-400 text-white text-[10px] font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 animate-on-scroll" data-astro-cid-j7pv25f6>
Club La Chica
</span> <h2 class="font-display text-5xl lg:text-6xl font-light text-white leading-none mb-6 animate-on-scroll delay-100" data-astro-cid-j7pv25f6>
Curated For<br data-astro-cid-j7pv25f6><span class="italic text-pink-300" data-astro-cid-j7pv25f6>The Modern Filipina</span> </h2> <p class="font-body text-stone-400 leading-relaxed mb-8 animate-on-scroll delay-200" data-astro-cid-j7pv25f6>
Sets, tops, and everyday essentials — crafted to make you feel beautiful every single day.
</p> <div class="flex flex-wrap gap-4 animate-on-scroll delay-300" data-astro-cid-j7pv25f6> <a href="/catalog" class="btn-primary" data-astro-cid-j7pv25f6>Shop All Styles</a> <a href="/collection" class="btn-ghost" data-astro-cid-j7pv25f6>View Lookbook</a> </div> </div> </div> </section>  <section class="py-20 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-3 animate-on-scroll" data-astro-cid-j7pv25f6>Customer Favorites</p> <h2 class="font-display text-4xl lg:text-5xl font-light text-stone-800 animate-on-scroll delay-100" data-astro-cid-j7pv25f6>Best Sellers</h2> <div class="section-divider mt-4 animate-on-scroll delay-200" data-astro-cid-j7pv25f6></div> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6" data-astro-cid-j7pv25f6> ${bestSellers.map((product, i) => renderTemplate`<div class="group" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ProductCard", $$ProductCard, { ...product, "index": i, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <div class="text-center mt-12 animate-on-scroll" data-astro-cid-j7pv25f6> <a href="/catalog" class="btn-outline" data-astro-cid-j7pv25f6>View All Products</a> </div> </div> </section>  <section class="py-20 bg-champagne overflow-hidden" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid lg:grid-cols-2 gap-16 items-center" data-astro-cid-j7pv25f6> <!-- Images mosaic --> <div class="relative animate-on-scroll-left" data-astro-cid-j7pv25f6> <div class="grid grid-cols-2 gap-4" data-astro-cid-j7pv25f6> <div class="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl" data-astro-cid-j7pv25f6> <img src="/images/products/fifi/IMG_9633.jpeg" alt="Fifi Set" class="w-full h-full object-cover object-top" data-astro-cid-j7pv25f6> </div> <div class="mt-8 space-y-4" data-astro-cid-j7pv25f6> <div class="aspect-square rounded-3xl overflow-hidden shadow-xl" data-astro-cid-j7pv25f6> <img src="/images/products/lachica/IMG_9168.jpeg" alt="Lachica Set" class="w-full h-full object-cover object-top" data-astro-cid-j7pv25f6> </div> <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl" data-astro-cid-j7pv25f6> <img src="/images/products/yoyo/IMG_9693.jpeg" alt="Yoyo Top" class="w-full h-full object-cover object-top" data-astro-cid-j7pv25f6> </div> </div> </div> <!-- Floating review card --> <div class="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-2xl max-w-[220px] hidden lg:block" style="animation: float 6s ease-in-out infinite;" data-astro-cid-j7pv25f6> <div class="flex items-center gap-1 mb-2" data-astro-cid-j7pv25f6> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg width="11" height="11" fill="#f9a8d4" viewBox="0 0 24 24" data-astro-cid-j7pv25f6><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-j7pv25f6></path></svg>`)} </div> <p class="font-display text-sm text-stone-700 italic leading-snug" data-astro-cid-j7pv25f6>"Love my Fifi Set! So flattering and comfy!"</p> <p class="text-xs text-stone-400 mt-2 font-body" data-astro-cid-j7pv25f6>— Jessa, verified buyer</p> </div> </div> <!-- Text --> <div class="animate-on-scroll-right" data-astro-cid-j7pv25f6> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-4" data-astro-cid-j7pv25f6>Our Story</p> <h2 class="font-display text-5xl font-light text-stone-800 leading-tight mb-6" data-astro-cid-j7pv25f6>
Made for the<br data-astro-cid-j7pv25f6><span class="italic text-pink-400" data-astro-cid-j7pv25f6>Modern Filipina</span> </h2> <p class="font-body text-stone-500 leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Club La Chica was born from a simple belief: every woman deserves to feel beautiful, confident, and comfortable — without the luxury price tag.
</p> <p class="font-body text-stone-500 leading-relaxed mb-8" data-astro-cid-j7pv25f6>
We curate pieces that celebrate femininity in all its forms. From casual days to celebrations worth dressing up for — our collection has something for every chica.
</p> <div class="grid grid-cols-2 gap-4 mb-8" data-astro-cid-j7pv25f6> ${[
    { icon: "\u{1F338}", label: "Feminine", desc: "Curated with love" },
    { icon: "\u2728", label: "Quality", desc: "Premium fabrics" },
    { icon: "\u{1F49A}", label: "Mindful", desc: "Thoughtfully made" },
    { icon: "\u{1F1F5}\u{1F1ED}", label: "Filipino", desc: "Proudly local" }
  ].map((val) => renderTemplate`<div class="flex gap-3 items-start" data-astro-cid-j7pv25f6> <span class="text-xl flex-shrink-0" data-astro-cid-j7pv25f6>${val.icon}</span> <div data-astro-cid-j7pv25f6> <p class="font-body font-semibold text-stone-800 text-sm" data-astro-cid-j7pv25f6>${val.label}</p> <p class="text-stone-400 text-xs" data-astro-cid-j7pv25f6>${val.desc}</p> </div> </div>`)} </div> <a href="/about" class="btn-primary" data-astro-cid-j7pv25f6>Discover Our Story</a> </div> </div> </div> </section>  <section class="py-16 bg-cream" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-8 animate-on-scroll" data-astro-cid-j7pv25f6> <p class="font-body text-stone-500 text-sm" data-astro-cid-j7pv25f6>Follow us <a href="#" class="text-pink-400 font-semibold" data-astro-cid-j7pv25f6>@clublachica</a> for daily style inspo</p> </div> <div class="grid grid-cols-4 lg:grid-cols-6 gap-3" data-astro-cid-j7pv25f6> ${[
    "/images/products/fifi/IMG_9635.jpeg",
    "/images/products/yoyo/IMG_9698.jpeg",
    "/images/products/ari/IMG_3456.jpeg",
    "/images/products/fifi/IMG_9637.jpeg",
    "/images/products/lachica/IMG_9170.jpeg",
    "/images/products/yoyo/IMG_9699.jpeg"
  ].map((img, i) => renderTemplate`<a href="#" class="relative group overflow-hidden rounded-2xl animate-on-scroll"${addAttribute(`transition-delay: ${i * 0.08}s`, "style")} data-astro-cid-j7pv25f6> <div class="aspect-square" data-astro-cid-j7pv25f6> <img${addAttribute(img, "src")} alt="Club La Chica" class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" data-astro-cid-j7pv25f6> </div> <div class="absolute inset-0 bg-pink-400/0 group-hover:bg-pink-400/20 transition-colors duration-300 flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="opacity-0 group-hover:opacity-100 transition-opacity duration-300" width="22" height="22" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-j7pv25f6></rect><circle cx="12" cy="12" r="4" data-astro-cid-j7pv25f6></circle><circle cx="17.5" cy="6.5" r="1" fill="white" data-astro-cid-j7pv25f6></circle> </svg> </div> </a>`)} </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/home/claude/clc-shop/clc-export/src/pages/index.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
