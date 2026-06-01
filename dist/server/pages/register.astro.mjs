/* empty css                                 */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead } from '../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../chunks/Layout_BQZ2qm1-.mjs';
import { a as $$Navbar, $ as $$Footer } from '../chunks/Footer_C99FHmTl.mjs';
import { o as getSessionUser, p as getUserByEmail, d as createUser, r as setSessionCookie } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const user = getSessionUser(Astro2.request);
  if (user) return Astro2.redirect("/");
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim().toLowerCase();
    const phone = data.get("phone")?.trim();
    const address = data.get("address")?.trim();
    const password = data.get("password");
    const confirm = data.get("confirm");
    if (!name || !email || !password || !confirm) {
      error = "Please fill in all required fields.";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters.";
    } else if (password !== confirm) {
      error = "Passwords do not match.";
    } else if (getUserByEmail(email)) {
      error = "An account with that email already exists.";
    } else {
      const newUser = createUser(email, password, name, phone, address);
      const { cookie } = setSessionCookie(Astro2.response, newUser.id);
      Astro2.response.headers.set("Set-Cookie", cookie);
      return Astro2.redirect("/");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create Account" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="min-h-screen bg-cream flex items-center justify-center pt-24 pb-16 px-4"> <div class="w-full max-w-md"> <div class="bg-white rounded-3xl shadow-xl overflow-hidden"> <div class="h-2 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-200"></div> <div class="p-8 lg:p-10"> <div class="text-center mb-8"> <a href="/" class="inline-block"> <div class="font-display text-3xl font-light tracking-widest text-stone-800">CLUB</div> <div class="font-display text-base font-light tracking-[0.4em] text-pink-400 -mt-1">LA CHICA</div> </a> <h1 class="font-display text-2xl font-light text-stone-700 mt-4">Create an account</h1> <p class="text-stone-400 text-sm font-body mt-1">Join the Club La Chica family</p> </div> ${error && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 text-sm font-body mb-6 flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${error} </div>`} <form method="POST" class="space-y-4"> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Full Name <span class="text-pink-400">*</span></label> <input type="text" name="name" placeholder="Maria Santos" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Email Address <span class="text-pink-400">*</span></label> <input type="email" name="email" placeholder="hello@email.com" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Phone Number</label> <input type="tel" name="phone" placeholder="+63 917 123 4567" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Delivery Address</label> <textarea name="address" rows="2" placeholder="Street, Barangay, City, Province" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm resize-none"></textarea> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Password <span class="text-pink-400">*</span></label> <input type="password" name="password" placeholder="Min. 6 characters" required minlength="6" class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <div> <label class="block text-xs font-body font-medium text-stone-600 tracking-wider uppercase mb-1.5">Confirm Password <span class="text-pink-400">*</span></label> <input type="password" name="confirm" placeholder="Re-enter password" required class="w-full bg-cream border border-stone-200 rounded-2xl px-5 py-3.5 font-body text-stone-700 placeholder-stone-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all text-sm"> </div> <button type="submit" class="w-full btn-primary py-4 rounded-2xl text-sm font-semibold tracking-wider uppercase mt-2">
Create Account
</button> </form> <p class="text-center text-stone-500 text-sm font-body mt-6">
Already have an account?${" "} <a href="/login" class="text-pink-400 font-semibold hover:text-pink-600 transition-colors">Sign in</a> </p> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/claude/clc-shop/clc-export/src/pages/register.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
