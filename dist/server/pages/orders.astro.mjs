/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, l as getOrdersByUser, h as getCart } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Orders = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Orders;
  const user = getSessionUser(Astro2.request);
  if (!user) return Astro2.redirect("/login?redirect=/orders");
  const orders = getOrdersByUser(user.id).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  const formatPrice = (p) => p.toLocaleString("en-PH");
  const formatDate = (d) => new Date(d).toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" });
  const statusColor = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Orders" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-4xl mx-auto px-6 lg:px-8"> <div class="flex items-center justify-between mb-10"> <div> <h1 class="font-display text-4xl font-light text-stone-800">My Orders</h1> <p class="font-body text-stone-400 text-sm mt-1">${orders.length} order${orders.length !== 1 ? "s" : ""} total</p> </div> <a href="/catalog" class="btn-outline text-sm py-3">Shop More</a> </div> ${orders.length === 0 ? renderTemplate`<div class="text-center py-24 bg-white rounded-3xl shadow-sm"> <div class="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-5"> <svg width="28" height="28" fill="none" stroke="#f9a8d4" stroke-width="1.5" viewBox="0 0 24 24"> <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z"></path> </svg> </div> <h2 class="font-display text-2xl font-light text-stone-700 mb-2">No orders yet</h2> <p class="text-stone-400 font-body text-sm mb-6">Your orders will appear here after you shop.</p> <a href="/catalog" class="btn-primary">Start Shopping</a> </div>` : renderTemplate`<div class="space-y-4"> ${orders.map((order) => renderTemplate`<div class="bg-white rounded-3xl shadow-sm overflow-hidden"> <!-- Header --> <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-stone-100"> <div class="flex items-center gap-4"> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Order ID</p> <p class="font-body font-semibold text-stone-700 text-sm">${order.id}</p> </div> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Date</p> <p class="font-body text-stone-600 text-sm">${formatDate(order.createdAt)}</p> </div> </div> <div class="flex items-center gap-3"> <span${addAttribute(`text-xs font-semibold px-3 py-1.5 rounded-full capitalize ${statusColor[order.orderStatus] || "bg-stone-100 text-stone-600"}`, "class")}> ${order.orderStatus} </span> <span${addAttribute(`text-xs font-semibold px-3 py-1.5 rounded-full ${order.paymentMethod === "cod" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`, "class")}> ${order.paymentMethod === "cod" ? "COD" : "Online Pay"} </span> </div> </div> <!-- Items preview --> <div class="px-6 py-4"> <div class="flex items-center gap-3 flex-wrap"> ${order.items.slice(0, 4).map((item) => renderTemplate`<div class="flex items-center gap-2"> <img${addAttribute(item.productImage, "src")}${addAttribute(item.productName, "alt")} class="w-12 h-14 object-cover object-top rounded-xl"> <div> <p class="font-body text-xs font-medium text-stone-700">${item.productName}</p> <p class="text-stone-400 text-[10px] font-body">× ${item.qty}</p> </div> </div>`)} ${order.items.length > 4 && renderTemplate`<span class="text-xs text-stone-400 font-body">+${order.items.length - 4} more</span>`} </div> </div> <!-- Footer --> <div class="flex items-center justify-between px-6 py-4 bg-stone-50 border-t border-stone-100"> <div> <p class="text-[10px] text-stone-400 uppercase tracking-widest font-body">Total</p> <p class="font-display text-lg text-pink-500">₱${formatPrice(order.total)}</p> </div> <a${addAttribute(`/order-confirmation/${order.id}`, "href")} class="btn-outline text-xs py-2 px-5">View Details</a> </div> </div>`)} </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/orders.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/orders.astro";
const $$url = "/orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Orders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
