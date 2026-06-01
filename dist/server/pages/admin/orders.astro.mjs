/* empty css                                    */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQZ2qm1-.mjs';
import { o as getSessionUser, t as updateOrder, k as getOrders } from '../../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Orders = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Orders;
  const user = getSessionUser(Astro2.request);
  if (!user || !user.isAdmin) return Astro2.redirect("/login");
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("id");
    const orderStatus = data.get("orderStatus");
    const paymentStatus = data.get("paymentStatus");
    if (id) {
      updateOrder(id, {
        ...orderStatus && { orderStatus },
        ...paymentStatus && { paymentStatus }
      });
    }
    return Astro2.redirect("/admin/orders?msg=Order+updated");
  }
  const msg = Astro2.url.searchParams.get("msg");
  const orders = getOrders().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const formatPrice = (p) => p.toLocaleString("en-PH");
  const formatDate = (d) => new Date(d).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const statusColor = {
    pending: "bg-yellow-900/50 text-yellow-400",
    confirmed: "bg-blue-900/50 text-blue-400",
    shipped: "bg-purple-900/50 text-purple-400",
    delivered: "bg-green-900/50 text-green-400",
    cancelled: "bg-red-900/50 text-red-400"
  };
  const payColor = {
    pending: "bg-amber-900/50 text-amber-400",
    paid: "bg-green-900/50 text-green-400",
    failed: "bg-red-900/50 text-red-400"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin \u2014 Orders" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-stone-900 border-b border-stone-800"> <div class="max-w-full px-6 flex items-center justify-between h-16"> <div class="flex items-center gap-6"> <a href="/admin" class="font-display text-lg text-white tracking-widest">CLUB LA CHICA <span class="text-pink-400 text-xs font-body">ADMIN</span></a> <div class="hidden md:flex items-center gap-1"> ${[
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/orders", label: "Orders", active: true },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/feedback", label: "Feedback" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-4 py-2 rounded-lg text-xs font-body font-medium tracking-wider uppercase transition-colors ${link.active ? "bg-stone-800 text-white" : "text-stone-400 hover:text-white hover:bg-stone-800"}`, "class")}> ${link.label} </a>`)} </div> </div> <div class="flex items-center gap-3"> <a href="/" class="text-stone-400 hover:text-white text-xs font-body">View Site</a> <a href="/logout" class="bg-pink-400 hover:bg-pink-500 text-white text-xs font-body font-semibold px-4 py-2 rounded-full">Logout</a> </div> </div> </nav> <main class="min-h-screen bg-stone-950 pt-20 pb-12"> <div class="max-w-7xl mx-auto px-6"> <div class="py-8"> <h1 class="font-display text-3xl font-light text-white">Orders</h1> <p class="text-stone-500 font-body text-sm mt-1">${orders.length} total orders</p> </div> ${msg && renderTemplate`<div class="bg-green-900/40 border border-green-700 text-green-300 rounded-2xl px-4 py-3 text-sm font-body mb-6">${msg}</div>`} <div class="space-y-4"> ${orders.length === 0 ? renderTemplate`<div class="bg-stone-900 rounded-2xl border border-stone-800 p-12 text-center"> <p class="text-stone-500 font-body">No orders yet.</p> </div>` : orders.map((order) => renderTemplate`<div class="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden"> <!-- Order Header --> <div class="flex flex-wrap items-start gap-4 px-6 py-4 border-b border-stone-800"> <div class="flex-1 min-w-0"> <div class="flex items-center gap-3 flex-wrap"> <p class="font-body font-semibold text-white text-sm">${order.userName}</p> <p class="text-stone-500 text-xs font-body">${order.userEmail}</p> ${order.userPhone && renderTemplate`<p class="text-stone-500 text-xs font-body">${order.userPhone}</p>`} </div> <p class="text-stone-600 text-xs font-body mt-1">${order.id} · ${formatDate(order.createdAt)}</p> </div> <div class="flex items-center gap-2 flex-wrap"> <span${addAttribute(`text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusColor[order.orderStatus] || ""}`, "class")}> ${order.orderStatus} </span> <span${addAttribute(`text-[10px] font-semibold px-2.5 py-1 rounded-full ${payColor[order.paymentStatus] || ""}`, "class")}> ${order.paymentStatus === "pending" ? order.paymentMethod === "cod" ? "COD" : "Awaiting Payment" : order.paymentStatus} </span> <span class="text-pink-400 font-body font-semibold text-sm ml-2">₱${formatPrice(order.total)}</span> </div> </div> <!-- Items --> <div class="px-6 py-4 border-b border-stone-800"> <div class="flex items-center gap-3 flex-wrap"> ${order.items.map((item) => renderTemplate`<div class="flex items-center gap-2"> <img${addAttribute(item.productImage, "src")}${addAttribute(item.productName, "alt")} class="w-10 h-12 object-cover object-top rounded-lg"> <div> <p class="text-stone-300 text-xs font-body font-medium">${item.productName}</p> <p class="text-stone-600 text-[10px] font-body">× ${item.qty} · ₱${formatPrice(item.price)}</p> </div> </div>`)} </div> <div class="mt-3"> <p class="text-stone-500 text-xs font-body"><span class="text-stone-600">📍</span> ${order.address}</p> ${order.notes && renderTemplate`<p class="text-stone-600 text-xs font-body mt-1">Note: ${order.notes}</p>`} </div> </div> <!-- Update Controls --> <form method="POST" class="flex flex-wrap items-center gap-4 px-6 py-4"> <input type="hidden" name="id"${addAttribute(order.id, "value")}> <div class="flex items-center gap-2"> <label class="text-[10px] text-stone-500 uppercase tracking-widest font-body">Order Status</label> <select name="orderStatus" class="bg-stone-800 border border-stone-700 rounded-lg px-3 py-1.5 text-white text-xs font-body focus:outline-none focus:border-pink-400"> ${["pending", "confirmed", "shipped", "delivered", "cancelled"].map((s) => renderTemplate`<option${addAttribute(s, "value")}${addAttribute(s === order.orderStatus, "selected")}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`)} </select> </div> <div class="flex items-center gap-2"> <label class="text-[10px] text-stone-500 uppercase tracking-widest font-body">Payment</label> <select name="paymentStatus" class="bg-stone-800 border border-stone-700 rounded-lg px-3 py-1.5 text-white text-xs font-body focus:outline-none focus:border-pink-400"> ${["pending", "paid", "failed"].map((s) => renderTemplate`<option${addAttribute(s, "value")}${addAttribute(s === order.paymentStatus, "selected")}>${s.charAt(0).toUpperCase() + s.slice(1)}</option>`)} </select> </div> <button type="submit" class="bg-pink-400 hover:bg-pink-500 text-white text-xs font-body font-semibold px-4 py-1.5 rounded-full transition-colors">
Update
</button> </form> </div>`)} </div> </div> </main> ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/admin/orders.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/admin/orders.astro";
const $$url = "/admin/orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Orders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
