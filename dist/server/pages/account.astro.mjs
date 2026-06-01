/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, h as getCart, l as getOrdersByUser, v as updateUser } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
  const user = getSessionUser(Astro2.request);
  if (!user) return Astro2.redirect("/login?redirect=/account");
  const cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  const orders = getOrdersByUser(user.id);
  const totalSpent = orders.filter((o) => o.orderStatus !== "cancelled").reduce((s, o) => s + o.total, 0);
  const formatPrice = (p) => p.toLocaleString("en-PH");
  let success = "";
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const action = data.get("action");
    if (action === "profile") {
      const name = data.get("name")?.trim();
      const phone = data.get("phone")?.trim();
      const address = data.get("address")?.trim();
      if (!name) {
        error = "Name is required.";
      } else {
        updateUser(user.id, { name, phone, address });
        success = "Profile updated successfully!";
      }
    } else if (action === "password") {
      const { verifyPassword, hashPassword } = await import('../chunks/auth_q-gLBKwE.mjs').then(n => n.e);
      const current = data.get("current");
      const newPw = data.get("newpw");
      const confirm = data.get("confirm");
      if (!verifyPassword(current, user.passwordHash)) {
        error = "Current password is incorrect.";
      } else if (newPw.length < 6) {
        error = "New password must be at least 6 characters.";
      } else if (newPw !== confirm) {
        error = "New passwords do not match.";
      } else {
        updateUser(user.id, { passwordHash: hashPassword(newPw) });
        success = "Password changed successfully!";
      }
    }
    return Astro2.redirect("/account?" + (success ? "msg=" + encodeURIComponent(success) : "err=" + encodeURIComponent(error)));
  }
  const msg = Astro2.url.searchParams.get("msg");
  const err = Astro2.url.searchParams.get("err");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Account" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-5xl mx-auto px-6 lg:px-8"> <div class="mb-10"> <h1 class="font-display text-4xl font-light text-stone-800">My Account</h1> <p class="text-stone-400 font-body text-sm mt-1">Manage your profile and settings</p> </div> ${msg && renderTemplate`<div class="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 text-sm font-body mb-6 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ${msg} </div>`} ${err && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 text-sm font-body mb-6 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${err} </div>`} <div class="grid lg:grid-cols-3 gap-6"> <!-- Sidebar stats --> <div class="space-y-4"> <!-- Avatar card --> <div class="bg-white rounded-3xl p-6 shadow-sm text-center"> <div class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-rose-100 flex items-center justify-center mx-auto mb-4"> <span class="font-display text-3xl font-light text-stone-700">${user.name.charAt(0).toUpperCase()}</span> </div> <h2 class="font-display text-xl font-medium text-stone-800">${user.name}</h2> <p class="text-stone-400 text-sm font-body mt-1">${user.email}</p> <div class="flex gap-3 mt-5 justify-center"> <a href="/orders" class="btn-outline text-xs py-2 px-4">My Orders</a> <a href="/logout" class="text-xs text-stone-400 hover:text-red-400 transition-colors font-body py-2 px-3 border border-stone-200 rounded-full">Logout</a> </div> </div> <!-- Stats --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h3 class="font-display text-lg font-medium text-stone-800 mb-4">Stats</h3> <div class="space-y-3"> <div class="flex justify-between items-center"> <span class="text-stone-500 font-body text-sm">Total Orders</span> <span class="font-display text-lg text-stone-800">${orders.length}</span> </div> <div class="flex justify-between items-center"> <span class="text-stone-500 font-body text-sm">Total Spent</span> <span class="font-display text-lg text-pink-500">₱${formatPrice(totalSpent)}</span> </div> <div class="flex justify-between items-center"> <span class="text-stone-500 font-body text-sm">Delivered</span> <span class="font-display text-lg text-green-500">${orders.filter((o) => o.orderStatus === "delivered").length}</span> </div> </div> </div> <!-- Quick Links --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h3 class="font-display text-lg font-medium text-stone-800 mb-4">Quick Links</h3> <div class="space-y-2"> ${[
    { href: "/orders", label: "View Orders", icon: "M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" },
    { href: "/catalog", label: "Shop Now", icon: "M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" },
    { href: "/feedback", label: "Leave Feedback", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-pink-50 transition-colors group"> <div class="w-8 h-8 bg-pink-50 group-hover:bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="text-pink-400" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"> <path${addAttribute(link.icon, "d")}></path> </svg> </div> <span class="text-stone-600 text-sm font-body group-hover:text-stone-800 transition-colors">${link.label}</span> </a>`)} </div> </div> </div> <!-- Main forms --> <div class="lg:col-span-2 space-y-6"> <!-- Profile form --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h2 class="font-display text-xl font-medium text-stone-800 mb-6">Profile Information</h2> <form method="POST" class="space-y-4"> <input type="hidden" name="action" value="profile"> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Full Name</label> <input type="text" name="name"${addAttribute(user.name, "value")} required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Email Address</label> <input type="email"${addAttribute(user.email, "value")} disabled class="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-400 text-sm cursor-not-allowed"> <p class="text-stone-400 text-xs font-body mt-1">Email cannot be changed.</p> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Phone Number</label> <input type="tel" name="phone"${addAttribute(user.phone || "", "value")} placeholder="+63 917 123 4567" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Default Delivery Address</label> <textarea name="address" rows="3" placeholder="Street, Barangay, City, Province, ZIP" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm resize-none">${user.address || ""}</textarea> </div> <div class="flex justify-end"> <button type="submit" class="btn-primary py-3 px-8 rounded-2xl text-sm">Save Changes</button> </div> </form> </div> <!-- Password form --> <div class="bg-white rounded-3xl p-6 shadow-sm"> <h2 class="font-display text-xl font-medium text-stone-800 mb-6">Change Password</h2> <form method="POST" class="space-y-4"> <input type="hidden" name="action" value="password"> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Current Password</label> <input type="password" name="current" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">New Password</label> <input type="password" name="newpw" required minlength="6" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Confirm New Password</label> <input type="password" name="confirm" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div class="flex justify-end"> <button type="submit" class="btn-outline py-3 px-8 rounded-2xl text-sm">Update Password</button> </div> </form> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/account.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/account.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
