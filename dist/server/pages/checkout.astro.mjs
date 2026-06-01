/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, h as getCart, m as getProductById, b as createOrder } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Checkout;
  const user = getSessionUser(Astro2.request);
  if (!user) return Astro2.redirect("/login?redirect=/checkout");
  const cart = getCart(Astro2.request);
  if (cart.length === 0) return Astro2.redirect("/cart");
  const cartItems = cart.map((c) => {
    const product = getProductById(c.productId);
    return product ? { product, qty: c.qty, subtotal: product.price * c.qty } : null;
  }).filter(Boolean);
  const total = cartItems.reduce((s, i) => s + i.subtotal, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const formatPrice = (p) => p.toLocaleString("en-PH");
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const address = data.get("address")?.trim();
    const phone = data.get("phone")?.trim();
    const payment = data.get("payment");
    const notes = data.get("notes")?.trim();
    if (!address || !phone || !payment) {
      error = "Please fill in all required fields.";
    } else {
      const order = createOrder({
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        userPhone: phone,
        items: cartItems.map(({ product, qty }) => ({
          productId: product.id,
          productName: product.name,
          productImage: product.images[0],
          price: product.price,
          qty
        })),
        total,
        paymentMethod: payment,
        paymentStatus: payment === "cod" ? "pending" : "pending",
        orderStatus: "pending",
        address,
        notes
      });
      Astro2.response.headers.set("Set-Cookie", `clc_cart=; Path=/; SameSite=Lax; Max-Age=0`);
      return Astro2.redirect(`/order-confirmation/${order.id}`);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="mb-10"> <h1 class="font-display text-4xl lg:text-5xl font-light text-stone-800">Checkout</h1> <div class="section-divider mt-3 ml-0" style="margin-left:0"></div> </div> <div class="grid lg:grid-cols-3 gap-8"> <!-- Checkout Form --> <div class="lg:col-span-2"> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 text-sm font-body mb-6 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${error} </div>`} <form method="POST" class="space-y-6"> <!-- Delivery Info --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h2 class="font-display text-xl font-medium text-stone-800 mb-5">Delivery Information</h2> <div class="space-y-4"> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Full Name</label> <input type="text"${addAttribute(user.name, "value")} disabled class="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-500 text-sm cursor-not-allowed"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Email</label> <input type="email"${addAttribute(user.email, "value")} disabled class="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-500 text-sm cursor-not-allowed"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Phone Number <span class="text-pink-400">*</span></label> <input type="tel" name="phone"${addAttribute(user.phone || "", "value")} placeholder="+63 917 123 4567" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Delivery Address <span class="text-pink-400">*</span></label> <textarea name="address" rows="3" required placeholder="Street, Barangay, City, Province, ZIP" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm resize-none">${user.address || ""}</textarea> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Order Notes (optional)</label> <textarea name="notes" rows="2" placeholder="Any special instructions..." class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm resize-none"></textarea> </div> </div> </div> <!-- Payment Method --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h2 class="font-display text-xl font-medium text-stone-800 mb-5">Payment Method</h2> <div class="space-y-3"> <label class="flex items-center gap-4 p-4 border-2 border-stone-200 rounded-2xl cursor-pointer hover:border-pink-300 transition-colors has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50"> <input type="radio" name="payment" value="online" class="accent-pink-400 w-4 h-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0"> <svg width="18" height="18" fill="none" stroke="#d4829e" stroke-width="1.8" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> </div> <div> <p class="font-body font-semibold text-stone-700 text-sm">Online Payment</p> <p class="text-stone-400 text-xs">GCash, Maya, Bank Transfer</p> </div> </div> </label> <label class="flex items-center gap-4 p-4 border-2 border-stone-200 rounded-2xl cursor-pointer hover:border-pink-300 transition-colors has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50"> <input type="radio" name="payment" value="cod" class="accent-pink-400 w-4 h-4" checked> <div class="flex items-center gap-3"> <div class="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0"> <svg width="18" height="18" fill="none" stroke="#789f78" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> </div> <div> <p class="font-body font-semibold text-stone-700 text-sm">Cash on Delivery</p> <p class="text-stone-400 text-xs">Pay when you receive your order</p> </div> </div> </label> </div> </div> <button type="submit" class="w-full btn-primary py-4 rounded-2xl text-sm font-semibold tracking-wider">
Place Order →
</button> </form> </div> <!-- Order Summary --> <div class="lg:col-span-1"> <div class="bg-white rounded-3xl shadow-sm p-6 sticky top-28"> <h2 class="font-display text-xl font-medium text-stone-800 mb-6">Order Summary</h2> <div class="space-y-4 mb-5"> ${cartItems.map(({ product, qty, subtotal }) => renderTemplate`<div class="flex gap-3 items-center"> <div class="relative flex-shrink-0"> <img${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="w-14 h-16 object-cover object-top rounded-xl"> <span class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-pink-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">${qty}</span> </div> <div class="flex-1"> <p class="font-body text-sm font-medium text-stone-700">${product.name}</p> <p class="text-xs text-stone-400 font-body">${product.category}</p> </div> <span class="text-sm font-semibold text-stone-700 font-body">₱${formatPrice(subtotal)}</span> </div>`)} </div> <div class="border-t border-stone-100 pt-4 space-y-2"> <div class="flex justify-between text-sm font-body text-stone-500"> <span>Subtotal (${cartCount} items)</span> <span>₱${formatPrice(total)}</span> </div> <div class="flex justify-between text-sm font-body text-stone-500"> <span>Shipping</span> <span>${total >= 2500 ? "Free \u{1F389}" : "To be confirmed"}</span> </div> </div> <div class="border-t border-stone-100 mt-3 pt-4 flex justify-between"> <span class="font-display text-lg text-stone-800">Total</span> <span class="font-display text-2xl font-light text-pink-500">₱${formatPrice(total)}</span> </div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/checkout.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
