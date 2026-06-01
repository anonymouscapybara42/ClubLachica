/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, h as getCart, g as encodeCart, m as getProductById } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart;
  const user = getSessionUser(Astro2.request);
  let cart = getCart(Astro2.request);
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const action = data.get("action");
    const productId = data.get("productId");
    if (action === "remove") {
      cart = cart.filter((c) => c.productId !== productId);
    } else if (action === "update") {
      const qty = parseInt(data.get("qty"));
      const idx = cart.findIndex((c) => c.productId === productId);
      if (idx >= 0) {
        if (qty <= 0) cart.splice(idx, 1);
        else cart[idx].qty = qty;
      }
    } else if (action === "clear") {
      cart = [];
    }
    const encoded = encodeCart(cart);
    Astro2.response.headers.set("Set-Cookie", `clc_cart=${encoded}; Path=/; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`);
    return Astro2.redirect("/cart");
  }
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartItems = cart.map((c) => {
    const product = getProductById(c.productId);
    return product ? { product, qty: c.qty, subtotal: product.price * c.qty } : null;
  }).filter(Boolean);
  const total = cartItems.reduce((s, i) => s + i.subtotal, 0);
  const formatPrice = (p) => p.toLocaleString("en-PH");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Cart" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="mb-10"> <h1 class="font-display text-4xl lg:text-5xl font-light text-stone-800">Your Cart</h1> <div class="section-divider mt-3 ml-0" style="margin-left:0"></div> </div> ${cartItems.length === 0 ? renderTemplate`<div class="text-center py-24 bg-white rounded-3xl shadow-sm"> <div class="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6"> <svg width="32" height="32" fill="none" stroke="#f9a8d4" stroke-width="1.5" viewBox="0 0 24 24"> <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path> </svg> </div> <h2 class="font-display text-2xl font-light text-stone-700 mb-2">Your cart is empty</h2> <p class="text-stone-400 font-body text-sm mb-8">Discover our collection and add your favorites!</p> <a href="/catalog" class="btn-primary">Browse Catalog</a> </div>` : renderTemplate`<div class="grid lg:grid-cols-3 gap-8"> <!-- Cart Items --> <div class="lg:col-span-2 space-y-4"> ${cartItems.map(({ product, qty, subtotal }) => renderTemplate`<div class="bg-white rounded-2xl p-5 flex gap-5 items-start shadow-sm"> <a${addAttribute(`/product/${product.id}`, "href")} class="flex-shrink-0"> <img${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="w-20 h-24 object-cover object-top rounded-xl hover:opacity-90 transition-opacity"> </a> <div class="flex-1"> <div class="flex justify-between items-start gap-4"> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">${product.category}</p> <a${addAttribute(`/product/${product.id}`, "href")}> <h3 class="font-display text-lg font-medium text-stone-800 hover:text-pink-500 transition-colors">${product.name}</h3> </a> <p class="text-pink-500 font-semibold text-sm mt-1">₱${formatPrice(product.price)} each</p> </div> <form method="POST"> <input type="hidden" name="action" value="remove"> <input type="hidden" name="productId"${addAttribute(product.id, "value")}> <button type="submit" class="text-stone-300 hover:text-red-400 transition-colors p-1" aria-label="Remove"> <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg> </button> </form> </div> <div class="flex items-center justify-between mt-4"> <form method="POST" class="flex items-center gap-2"> <input type="hidden" name="action" value="update"> <input type="hidden" name="productId"${addAttribute(product.id, "value")}> <div class="flex items-center border border-stone-200 rounded-full overflow-hidden bg-cream"> <button type="submit" name="qty"${addAttribute(String(qty - 1), "value")} class="px-3 py-1.5 text-stone-500 hover:bg-pink-50 transition-colors text-base font-body">−</button> <span class="px-3 text-sm font-body text-stone-700 font-medium">${qty}</span> <button type="submit" name="qty"${addAttribute(String(qty + 1), "value")} class="px-3 py-1.5 text-stone-500 hover:bg-pink-50 transition-colors text-base font-body">+</button> </div> </form> <span class="font-display text-lg font-medium text-stone-800">₱${formatPrice(subtotal)}</span> </div> </div> </div>`)} <div class="flex justify-between items-center pt-2"> <a href="/catalog" class="text-sm text-stone-400 hover:text-pink-400 transition-colors font-body flex items-center gap-1"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
Continue Shopping
</a> <form method="POST"> <input type="hidden" name="action" value="clear"> <button type="submit" class="text-xs text-stone-400 hover:text-red-400 transition-colors font-body uppercase tracking-wider">Clear Cart</button> </form> </div> </div> <!-- Order Summary --> <div class="lg:col-span-1"> <div class="bg-white rounded-3xl shadow-sm p-6 sticky top-28"> <h2 class="font-display text-xl font-medium text-stone-800 mb-6">Order Summary</h2> <div class="space-y-3 mb-4 border-b border-stone-100 pb-4"> ${cartItems.map(({ product, qty, subtotal }) => renderTemplate`<div class="flex justify-between text-sm font-body text-stone-500"> <span>${product.name} × ${qty}</span> <span>₱${formatPrice(subtotal)}</span> </div>`)} </div> <div class="flex justify-between items-center mb-2"> <span class="font-body text-stone-500 text-sm">Subtotal</span> <span class="font-body text-stone-700 font-medium">₱${formatPrice(total)}</span> </div> <div class="flex justify-between items-center mb-6"> <span class="font-body text-stone-500 text-sm">Shipping</span> <span class="font-body text-stone-500 text-sm">${total >= 2500 ? "Free" : "Calculated at checkout"}</span> </div> <div class="flex justify-between items-center border-t border-stone-100 pt-4 mb-6"> <span class="font-display text-lg text-stone-800">Total</span> <span class="font-display text-2xl font-light text-pink-500">₱${formatPrice(total)}</span> </div> ${user ? renderTemplate`<a href="/checkout" class="block w-full btn-primary py-4 rounded-2xl text-sm font-semibold text-center">
Proceed to Checkout →
</a>` : renderTemplate`<a href="/login?redirect=/checkout" class="block w-full btn-primary py-4 rounded-2xl text-sm font-semibold text-center">
Sign In to Checkout →
</a>`} <p class="text-center text-stone-400 text-xs font-body mt-4">Secure checkout · Cash on Delivery available</p> </div> </div> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/cart.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
