/* empty css                                 */
import { W as createComponent, V as createAstro } from '../chunks/astro/server_zoqtqm9I.mjs';
import { c as clearSessionCookie } from '../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.response.headers.set("Set-Cookie", clearSessionCookie());
  return Astro2.redirect("/login");
}, "/home/claude/clc-shop/clc-export/src/pages/logout.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
