/* empty css                                    */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_C99FHmTl.mjs';
import { m as getProductById, o as getSessionUser, h as getCart, g as encodeCart, n as getProducts } from '../../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const product = getProductById(id);
  if (!product || !product.active) return Astro2.redirect("/catalog");
  const user = getSessionUser(Astro2.request);
  let success = "";
  let cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const qty = parseInt(data.get("qty")) || 1;
    const cart = getCart(Astro2.request);
    const idx = cart.findIndex((c) => c.productId === product.id);
    if (idx >= 0) cart[idx].qty += qty;
    else cart.push({ productId: product.id, qty });
    const encoded = encodeCart(cart);
    const newCount = cart.reduce((s, i) => s + i.qty, 0);
    Astro2.response.headers.set("Set-Cookie", `clc_cart=${encoded}; Path=/; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`);
    success = "Added to cart!";
    cartCount = newCount;
  }
  const related = getProducts().filter((p) => p.id !== product.id && p.category === product.category && p.active).slice(0, 3);
  const formatPrice = (p) => p.toLocaleString("en-PH");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <!-- Breadcrumb --> <div class="flex items-center gap-2 text-xs font-body text-stone-400 mb-8"> <a href="/" class="hover:text-pink-400 transition-colors">Home</a> <span>/</span> <a href="/catalog" class="hover:text-pink-400 transition-colors">Catalog</a> <span>/</span> <span class="text-stone-600">${product.name}</span> </div> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20"> <!-- Image Gallery --> <div> <!-- Main image --> <div class="rounded-3xl overflow-hidden aspect-[3/4] relative bg-pink-50" id="main-img-wrapper"> <img id="main-img"${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover object-top transition-opacity duration-300"> </div> <!-- Thumbnails --> ${product.images.length > 1 && renderTemplate`<div class="flex gap-2 mt-3 overflow-x-auto pb-1"> ${product.images.map((img, i) => renderTemplate`<button${addAttribute(`flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden border-2 transition-all thumb-btn ${i === 0 ? "border-pink-400" : "border-transparent hover:border-pink-200"}`, "class")}${addAttribute(img, "data-src")} onclick="switchImg(this)"> <img${addAttribute(img, "src")} alt="" class="w-full h-full object-cover object-top"> </button>`)} </div>`} </div> <!-- Product Info --> <div class="lg:sticky lg:top-28 self-start"> <span class="text-[10px] text-pink-400 uppercase tracking-widest font-body">${product.category}</span> <h1 class="font-display text-4xl lg:text-5xl font-light text-stone-800 mt-2 mb-4">${product.name}</h1> ${product.badge && renderTemplate`<span class="inline-block bg-pink-400 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"> ${product.badge} </span>`} <div class="flex items-baseline gap-2 mb-6"> <span class="font-display text-3xl font-light text-pink-500">₱${formatPrice(product.price)}</span> </div> <div class="w-full h-px bg-stone-100 mb-6"></div> <!-- Stock --> <div class="flex items-center gap-2 mb-6"> <div${addAttribute(`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-green-400" : "bg-red-400"}`, "class")}></div> <span class="text-sm font-body text-stone-500">${product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span> </div> ${success && renderTemplate`<div class="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 text-sm font-body mb-4 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ${success} <a href="/cart" class="underline ml-1">View Cart →</a> </div>`} ${product.stock > 0 ? renderTemplate`<form method="POST" class="space-y-4"> <div class="flex items-center gap-4"> <label class="text-xs font-body font-medium text-stone-600 tracking-wider uppercase">Qty</label> <div class="flex items-center border border-stone-200 rounded-full overflow-hidden bg-white"> <button type="button" onclick="changeQty(-1)" class="px-4 py-2 text-stone-600 hover:bg-pink-50 transition-colors font-body text-lg">−</button> <input type="number" name="qty" id="qty-input" value="1" min="1"${addAttribute(product.stock, "max")} class="w-12 text-center font-body text-stone-700 border-none outline-none bg-transparent text-sm"> <button type="button" onclick="changeQty(1)" class="px-4 py-2 text-stone-600 hover:bg-pink-50 transition-colors font-body text-lg">+</button> </div> </div> <div class="flex gap-3"> <button type="submit" class="flex-1 btn-primary py-4 rounded-2xl text-sm font-semibold">
Add to Cart
</button> <a href="/cart" class="btn-outline py-4 px-6 rounded-2xl text-sm">View Cart</a> </div> </form>` : renderTemplate`<button disabled class="w-full bg-stone-200 text-stone-400 py-4 rounded-2xl text-sm font-semibold cursor-not-allowed">
Out of Stock
</button>`} <!-- Details --> <div class="mt-8 space-y-3 border-t border-stone-100 pt-6"> <div class="flex items-start gap-3 text-sm font-body text-stone-500"> <svg class="mt-0.5 flex-shrink-0 text-pink-400" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
Free delivery for orders ₱2,500+
</div> <div class="flex items-start gap-3 text-sm font-body text-stone-500"> <svg class="mt-0.5 flex-shrink-0 text-pink-400" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
Cash on delivery available
</div> <div class="flex items-start gap-3 text-sm font-body text-stone-500"> <svg class="mt-0.5 flex-shrink-0 text-pink-400" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
Made with love for the modern Filipina
</div> </div> </div> </div> <!-- Related Products --> ${related.length > 0 && renderTemplate`<div class="mt-20"> <h2 class="font-display text-3xl font-light text-stone-800 mb-8">You Might Also Like</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"> ${related.map((rp) => renderTemplate`<a${addAttribute(`/product/${rp.id}`, "href")} class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300"> <div class="aspect-[3/4] overflow-hidden"> <img${addAttribute(rp.images[0], "src")}${addAttribute(rp.name, "alt")} class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"> </div> <div class="p-4"> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">${rp.category}</p> <h3 class="font-display text-base font-medium text-stone-800 mt-1">${rp.name}</h3> <p class="text-pink-500 font-semibold text-sm mt-1">₱${formatPrice(rp.price)}</p> </div> </a>`)} </div> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/home/claude/clc-shop/clc-export/src/pages/product/[id].astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
