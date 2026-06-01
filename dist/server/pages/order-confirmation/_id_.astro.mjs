/* empty css                                    */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, j as getOrderById } from '../../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const user = getSessionUser(Astro2.request);
  if (!user) return Astro2.redirect("/login");
  const { id } = Astro2.params;
  const order = getOrderById(id);
  if (!order || order.userId !== user.id) return Astro2.redirect("/orders");
  const formatPrice = (p) => p.toLocaleString("en-PH");
  const formatDate = (d) => new Date(d).toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Order Confirmed!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": 0 })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-2xl mx-auto px-6"> <!-- Success Banner --> <div class="text-center mb-10"> <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 animate-bounce" style="animation: bounce 0.5s ease 1"> <svg width="36" height="36" fill="none" stroke="#22c55e" stroke-width="2.5" viewBox="0 0 24 24"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </div> <h1 class="font-display text-4xl font-light text-stone-800 mb-2">Order Placed! 🎉</h1> <p class="text-stone-500 font-body">Thank you, ${user.name}! Your order has been received.</p> </div> <!-- Order Card --> <div class="bg-white rounded-3xl shadow-sm overflow-hidden mb-6"> <div class="h-1.5 bg-gradient-to-r from-pink-300 to-sage-300"></div> <div class="p-6"> <!-- Order Meta --> <div class="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-stone-100"> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Order ID</p> <p class="font-body font-semibold text-stone-700 text-sm mt-1">${order.id}</p> </div> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Date</p> <p class="font-body text-stone-700 text-sm mt-1">${formatDate(order.createdAt)}</p> </div> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Payment</p> <span${addAttribute(`inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full ${order.paymentMethod === "cod" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`, "class")}> ${order.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"} </span> </div> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Status</p> <span class="inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 capitalize"> ${order.orderStatus} </span> </div> </div> <!-- Items --> <div class="space-y-4 mb-6 pb-6 border-b border-stone-100"> <p class="text-xs font-body font-semibold text-stone-500 uppercase tracking-wider">Items Ordered</p> ${order.items.map((item) => renderTemplate`<div class="flex gap-3 items-center"> <img${addAttribute(item.productImage, "src")}${addAttribute(item.productName, "alt")} class="w-14 h-16 object-cover object-top rounded-xl flex-shrink-0"> <div class="flex-1"> <p class="font-body font-medium text-stone-700 text-sm">${item.productName}</p> <p class="text-stone-400 text-xs font-body mt-0.5">Qty: ${item.qty} × ₱${formatPrice(item.price)}</p> </div> <span class="font-body font-semibold text-stone-700 text-sm">₱${formatPrice(item.price * item.qty)}</span> </div>`)} </div> <!-- Delivery --> <div class="mb-6 pb-6 border-b border-stone-100"> <p class="text-xs font-body font-semibold text-stone-500 uppercase tracking-wider mb-2">Delivery Address</p> <p class="font-body text-stone-600 text-sm">${order.address}</p> ${order.userPhone && renderTemplate`<p class="font-body text-stone-500 text-sm mt-1">${order.userPhone}</p>`} </div> <!-- Total --> <div class="flex justify-between items-center"> <span class="font-display text-lg text-stone-800">Total Paid</span> <span class="font-display text-3xl font-light text-pink-500">₱${formatPrice(order.total)}</span> </div> ${order.paymentMethod === "online" && renderTemplate`<div class="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm font-body text-blue-700"> <strong>Payment Instructions:</strong> Please send payment to our GCash/Maya number <strong>0917-123-4567</strong> and include your order ID <strong>${order.id}</strong> in the reference. We'll confirm once received.
</div>`} </div> </div> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-3"> <a href="/orders" class="btn-outline flex-1 text-center py-4 rounded-2xl text-sm">View My Orders</a> <a href="/catalog" class="btn-primary flex-1 text-center py-4 rounded-2xl text-sm">Continue Shopping</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/order-confirmation/[id].astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/order-confirmation/[id].astro";
const $$url = "/order-confirmation/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
