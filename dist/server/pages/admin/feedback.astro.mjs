/* empty css                                    */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQZ2qm1-.mjs';
import { o as getSessionUser, u as updateFeedback, i as getFeedbacks } from '../../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Feedback = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feedback;
  const user = getSessionUser(Astro2.request);
  if (!user || !user.isAdmin) return Astro2.redirect("/login");
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("id");
    const replied = data.get("replied")?.trim();
    if (id && replied) {
      updateFeedback(id, { replied });
    }
    return Astro2.redirect("/admin/feedback?msg=Reply+sent");
  }
  const msg = Astro2.url.searchParams.get("msg");
  const feedbacks = getFeedbacks().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const formatDate = (d) => new Date(d).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
  const avgRating = feedbacks.length ? (feedbacks.reduce((s, f) => s + f.rating, 0) / feedbacks.length).toFixed(1) : "\u2014";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin \u2014 Feedback" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-stone-900 border-b border-stone-800"> <div class="max-w-full px-6 flex items-center justify-between h-16"> <div class="flex items-center gap-6"> <a href="/admin" class="font-display text-lg text-white tracking-widest">CLUB LA CHICA <span class="text-pink-400 text-xs font-body">ADMIN</span></a> <div class="hidden md:flex items-center gap-1"> ${[
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/feedback", label: "Feedback", active: true }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-4 py-2 rounded-lg text-xs font-body font-medium tracking-wider uppercase transition-colors ${link.active ? "bg-stone-800 text-white" : "text-stone-400 hover:text-white hover:bg-stone-800"}`, "class")}> ${link.label} </a>`)} </div> </div> <div class="flex items-center gap-3"> <a href="/" class="text-stone-400 hover:text-white text-xs font-body">View Site</a> <a href="/logout" class="bg-pink-400 hover:bg-pink-500 text-white text-xs font-body font-semibold px-4 py-2 rounded-full">Logout</a> </div> </div> </nav> <main class="min-h-screen bg-stone-950 pt-20 pb-12"> <div class="max-w-5xl mx-auto px-6"> <div class="py-8 flex items-center justify-between"> <div> <h1 class="font-display text-3xl font-light text-white">Customer Feedback</h1> <p class="text-stone-500 font-body text-sm mt-1">${feedbacks.length} reviews · Avg rating: <span class="text-yellow-400">${avgRating} ★</span></p> </div> </div> ${msg && renderTemplate`<div class="bg-green-900/40 border border-green-700 text-green-300 rounded-2xl px-4 py-3 text-sm font-body mb-6">${msg}</div>`} ${feedbacks.length === 0 ? renderTemplate`<div class="bg-stone-900 rounded-2xl border border-stone-800 p-12 text-center"> <p class="text-stone-500 font-body">No feedback submitted yet.</p> </div>` : renderTemplate`<div class="space-y-4"> ${feedbacks.map((fb) => renderTemplate`<div class="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden"> <div class="p-6"> <div class="flex items-start justify-between gap-4 mb-3"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-rose-200 flex items-center justify-center flex-shrink-0"> <span class="font-display text-sm text-stone-700 font-medium">${fb.userName.charAt(0).toUpperCase()}</span> </div> <div> <p class="font-body font-semibold text-white text-sm">${fb.userName}</p> <p class="text-stone-500 text-xs font-body">${fb.userEmail} · ${formatDate(fb.createdAt)}</p> </div> </div> <div class="flex items-center gap-1 flex-shrink-0"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(i < fb.rating ? "text-yellow-400" : "text-stone-700", "class")} width="14" height="14" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg>`)} </div> </div> <p class="text-stone-300 font-body text-sm leading-relaxed">${fb.message}</p> ${fb.replied && renderTemplate`<div class="mt-4 bg-stone-800 rounded-xl p-4 border-l-2 border-pink-400"> <p class="text-[10px] text-pink-400 uppercase tracking-widest font-body mb-1">Admin Reply</p> <p class="text-stone-300 text-sm font-body">${fb.replied}</p> </div>`} ${!fb.replied && renderTemplate`<form method="POST" class="mt-4 flex gap-3"> <input type="hidden" name="id"${addAttribute(fb.id, "value")}> <input type="text" name="replied" placeholder="Type a reply..." required class="flex-1 bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-white text-sm font-body focus:outline-none focus:border-pink-400 placeholder-stone-600"> <button type="submit" class="bg-pink-400 hover:bg-pink-500 text-white text-xs font-body font-semibold px-4 py-2.5 rounded-xl transition-colors flex-shrink-0">
Reply
</button> </form>`} </div> </div>`)} </div>`} </div> </main> ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/admin/feedback.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/admin/feedback.astro";
const $$url = "/admin/feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
