import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_6DrQqukF.mjs';
import { manifest } from './manifest_DTQ43qQe.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/account.astro.mjs');
const _page3 = () => import('./pages/admin/feedback.astro.mjs');
const _page4 = () => import('./pages/admin/orders.astro.mjs');
const _page5 = () => import('./pages/admin/products.astro.mjs');
const _page6 = () => import('./pages/admin/users.astro.mjs');
const _page7 = () => import('./pages/admin.astro.mjs');
const _page8 = () => import('./pages/cart.astro.mjs');
const _page9 = () => import('./pages/catalog.astro.mjs');
const _page10 = () => import('./pages/checkout.astro.mjs');
const _page11 = () => import('./pages/collection.astro.mjs');
const _page12 = () => import('./pages/contact.astro.mjs');
const _page13 = () => import('./pages/feedback.astro.mjs');
const _page14 = () => import('./pages/login.astro.mjs');
const _page15 = () => import('./pages/logout.astro.mjs');
const _page16 = () => import('./pages/order-confirmation/_id_.astro.mjs');
const _page17 = () => import('./pages/orders.astro.mjs');
const _page18 = () => import('./pages/product/_id_.astro.mjs');
const _page19 = () => import('./pages/register.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.19_rollup@4.60.4_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/account.astro", _page2],
    ["src/pages/admin/feedback.astro", _page3],
    ["src/pages/admin/orders.astro", _page4],
    ["src/pages/admin/products.astro", _page5],
    ["src/pages/admin/users.astro", _page6],
    ["src/pages/admin/index.astro", _page7],
    ["src/pages/cart.astro", _page8],
    ["src/pages/catalog.astro", _page9],
    ["src/pages/checkout.astro", _page10],
    ["src/pages/collection.astro", _page11],
    ["src/pages/contact.astro", _page12],
    ["src/pages/feedback.astro", _page13],
    ["src/pages/login.astro", _page14],
    ["src/pages/logout.astro", _page15],
    ["src/pages/order-confirmation/[id].astro", _page16],
    ["src/pages/orders.astro", _page17],
    ["src/pages/product/[id].astro", _page18],
    ["src/pages/register.astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/claude/clc-shop/clc-export/dist/client/",
    "server": "file:///home/claude/clc-shop/clc-export/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
