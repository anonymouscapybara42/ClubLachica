/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute, e as Fragment } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, h as getCart, a as createFeedback, i as getFeedbacks } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Feedback = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feedback;
  const user = getSessionUser(Astro2.request);
  const cartCount = getCart(Astro2.request).reduce((s, i) => s + i.qty, 0);
  let success = false;
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const message = data.get("message")?.trim();
    const rating = parseInt(data.get("rating")) || 5;
    const name = user ? user.name : data.get("name")?.trim();
    const email = user ? user.email : data.get("email")?.trim();
    if (!message || !name || !email) {
      error = "Please fill in all required fields.";
    } else {
      createFeedback({
        userId: user?.id || "guest_" + Date.now(),
        userName: name,
        userEmail: email,
        message,
        rating: Math.min(5, Math.max(1, rating))
      });
      success = true;
    }
  }
  const allFeedbacks = getFeedbacks().filter((f) => !f.replied || true).slice(0, 10);
  const avgRating = allFeedbacks.length ? (allFeedbacks.reduce((s, f) => s + f.rating, 0) / allFeedbacks.length).toFixed(1) : null;
  const formatDate = (d) => new Date(d).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feedback" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "user": user, "cartCount": cartCount })} ${maybeRenderHead()}<main class="min-h-screen bg-cream pt-24 pb-16"> <div class="max-w-5xl mx-auto px-6 lg:px-8"> <!-- Header --> <div class="text-center mb-14"> <p class="text-pink-400 text-xs tracking-[0.3em] uppercase font-body mb-3">Share Your Experience</p> <h1 class="font-display text-5xl font-light text-stone-800 mb-3">We'd Love Your Feedback</h1> <div class="section-divider mt-4"></div> <p class="text-stone-500 font-body mt-5 max-w-md mx-auto">Your thoughts help us improve and serve you better. Every review means the world to us!</p> ${avgRating && renderTemplate`<div class="flex items-center justify-center gap-2 mt-4"> <div class="flex gap-1"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(i < Math.round(parseFloat(avgRating)) ? "text-yellow-400" : "text-stone-300", "class")} width="18" height="18" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg>`)} </div> <span class="font-display text-xl text-stone-700">${avgRating}</span> <span class="text-stone-400 font-body text-sm">(${allFeedbacks.length} reviews)</span> </div>`} </div> <div class="grid lg:grid-cols-2 gap-10"> <!-- Form --> <div> ${success ? renderTemplate`<div class="bg-white rounded-3xl p-10 shadow-sm text-center"> <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"> <svg width="28" height="28" fill="none" stroke="#22c55e" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <h2 class="font-display text-2xl font-light text-stone-800 mb-2">Thank you! 💕</h2> <p class="text-stone-500 font-body text-sm mb-6">Your feedback has been submitted. We appreciate you taking the time!</p> <div class="flex flex-col gap-3"> <a href="/catalog" class="btn-primary text-center py-3 rounded-2xl text-sm">Continue Shopping</a> <a href="/feedback" class="btn-outline text-center py-3 rounded-2xl text-sm" onclick="location.reload()">Leave Another Review</a> </div> </div>` : renderTemplate`<div class="bg-white rounded-3xl p-8 shadow-sm"> <h2 class="font-display text-2xl font-light text-stone-800 mb-6">Leave a Review</h2> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 text-sm font-body mb-5 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${error} </div>`} <form method="POST" class="space-y-5"> ${!user && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Your Name <span class="text-pink-400">*</span></label> <input type="text" name="name" required placeholder="Maria Santos" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Email Address <span class="text-pink-400">*</span></label> <input type="email" name="email" required placeholder="hello@email.com" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> ` })}`} ${user && renderTemplate`<div class="bg-pink-50 rounded-2xl px-4 py-3 text-sm font-body text-pink-700 flex items-center gap-2"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
Submitting as <strong class="ml-1">${user.name}</strong> </div>`} <!-- Star Rating --> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-3">Your Rating <span class="text-pink-400">*</span></label> <div class="flex gap-2" id="star-rating"> ${[1, 2, 3, 4, 5].map((n) => renderTemplate`<button type="button" class="star-btn text-stone-300 hover:text-yellow-400 transition-colors"${addAttribute(n, "data-val")}${addAttribute(`setRating(${n})`, "onclick")}> <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg> </button>`)} </div> <input type="hidden" name="rating" id="rating-input" value="5"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Your Review <span class="text-pink-400">*</span></label> <textarea name="message" rows="5" required placeholder="Tell us about your experience with Club La Chica! What did you love?" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm resize-none"></textarea> </div> <button type="submit" class="w-full btn-primary py-4 rounded-2xl text-sm font-semibold">
Submit Review
</button> ${!user && renderTemplate`<p class="text-center text-stone-400 text-xs font-body">
Have an account? <a href="/login" class="text-pink-400 hover:text-pink-600 transition-colors">Sign in</a> for a faster experience.
</p>`} </form> </div>`} </div> <!-- Reviews --> <div class="space-y-4"> <h2 class="font-display text-2xl font-light text-stone-800 mb-2">What Our Customers Say</h2> ${allFeedbacks.length === 0 ? renderTemplate`<div class="bg-white rounded-3xl p-8 shadow-sm text-center"> <p class="text-stone-400 font-body text-sm">Be the first to leave a review!</p> </div>` : allFeedbacks.map((fb) => renderTemplate`<div class="bg-white rounded-3xl p-5 shadow-sm"> <div class="flex items-start justify-between gap-3 mb-3"> <div class="flex items-center gap-3"> <div class="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-rose-100 flex items-center justify-center flex-shrink-0"> <span class="font-display text-sm text-stone-700">${fb.userName.charAt(0).toUpperCase()}</span> </div> <div> <p class="font-body font-semibold text-stone-700 text-sm">${fb.userName}</p> <p class="text-stone-400 text-xs font-body">${formatDate(fb.createdAt)}</p> </div> </div> <div class="flex gap-0.5 flex-shrink-0"> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(i < fb.rating ? "text-yellow-400" : "text-stone-200", "class")} width="12" height="12" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path> </svg>`)} </div> </div> <p class="text-stone-600 font-body text-sm leading-relaxed">${fb.message}</p> ${fb.replied && renderTemplate`<div class="mt-3 bg-pink-50 rounded-xl p-3 border-l-2 border-pink-300"> <p class="text-[10px] text-pink-500 uppercase tracking-widest font-body mb-1">Club La Chica replied</p> <p class="text-stone-600 text-xs font-body">${fb.replied}</p> </div>`} </div>`)} </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/home/claude/clc-shop/clc-export/src/pages/feedback.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/feedback.astro";
const $$url = "/feedback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Feedback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
