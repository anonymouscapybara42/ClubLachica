/* empty css                                    */
import { W as createComponent, a6 as renderComponent, ad as renderTemplate, V as createAstro, a3 as maybeRenderHead, H as addAttribute } from '../../chunks/astro/server_zoqtqm9I.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BQZ2qm1-.mjs';
import { o as getSessionUser, f as deleteProduct, n as getProducts, s as saveProduct } from '../../chunks/auth_q-gLBKwE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  const user = getSessionUser(Astro2.request);
  if (!user || !user.isAdmin) return Astro2.redirect("/login");
  let message = "";
  let error = "";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const action = data.get("action");
    if (action === "delete") {
      const id = data.get("id");
      deleteProduct(id);
      message = "Product deleted.";
    } else if (action === "toggle") {
      const id = data.get("id");
      const products2 = getProducts();
      const p = products2.find((x) => x.id === id);
      if (p) {
        p.active = !p.active;
        saveProduct(p);
      }
      message = "Product updated.";
    } else if (action === "save") {
      const id = data.get("id")?.trim() || "prod_" + Date.now();
      const name = data.get("name")?.trim();
      const price = parseFloat(data.get("price"));
      const category = data.get("category")?.trim();
      const badge = data.get("badge")?.trim();
      const stock = parseInt(data.get("stock")) || 0;
      const imagesRaw = data.get("images")?.trim();
      const images = imagesRaw.split("\n").map((s) => s.trim()).filter(Boolean);
      if (!name || !price || !category) {
        error = "Name, price, and category are required.";
      } else {
        const existing = getProducts().find((p) => p.id === id);
        const product = {
          id,
          name,
          price,
          category,
          badge: badge || void 0,
          stock,
          images: images.length > 0 ? images : existing?.images || [],
          active: existing?.active ?? true,
          createdAt: existing?.createdAt || (/* @__PURE__ */ new Date()).toISOString()
        };
        saveProduct(product);
        message = "Product saved successfully.";
      }
    } else if (action === "stock") {
      const id = data.get("id");
      const stock = parseInt(data.get("stock")) || 0;
      const products2 = getProducts();
      const p = products2.find((x) => x.id === id);
      if (p) {
        p.stock = stock;
        saveProduct(p);
      }
      message = "Stock updated.";
    }
    return Astro2.redirect("/admin/products" + (message ? "?msg=" + encodeURIComponent(message) : ""));
  }
  const msg = Astro2.url.searchParams.get("msg");
  const products = getProducts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin \u2014 Products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 z-50 bg-stone-900 border-b border-stone-800"> <div class="max-w-full px-6 flex items-center justify-between h-16"> <div class="flex items-center gap-6"> <a href="/admin" class="font-display text-lg text-white tracking-widest">CLUB LA CHICA <span class="text-pink-400 text-xs font-body">ADMIN</span></a> <div class="hidden md:flex items-center gap-1"> ${[
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products", active: true },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/feedback", label: "Feedback" }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-4 py-2 rounded-lg text-xs font-body font-medium tracking-wider uppercase transition-colors ${link.active ? "bg-stone-800 text-white" : "text-stone-400 hover:text-white hover:bg-stone-800"}`, "class")}> ${link.label} </a>`)} </div> </div> <div class="flex items-center gap-3"> <a href="/" class="text-stone-400 hover:text-white text-xs font-body transition-colors">View Site</a> <a href="/logout" class="bg-pink-400 hover:bg-pink-500 text-white text-xs font-body font-semibold px-4 py-2 rounded-full transition-colors">Logout</a> </div> </div> </nav> <main class="min-h-screen bg-stone-950 pt-20 pb-12"> <div class="max-w-7xl mx-auto px-6"> <div class="py-8 flex items-center justify-between"> <div> <h1 class="font-display text-3xl font-light text-white">Products</h1> <p class="text-stone-500 font-body text-sm mt-1">${products.length} products</p> </div> <button onclick="document.getElementById('add-modal').classList.remove('hidden')" class="bg-pink-400 hover:bg-pink-500 text-white text-sm font-body font-semibold px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
Add Product
</button> </div> ${msg && renderTemplate`<div class="bg-green-900/40 border border-green-700 text-green-300 rounded-2xl px-4 py-3 text-sm font-body mb-6">${msg}</div>`} ${error && renderTemplate`<div class="bg-red-900/40 border border-red-700 text-red-300 rounded-2xl px-4 py-3 text-sm font-body mb-6">${error}</div>`} <!-- Products Table --> <div class="bg-stone-900 rounded-2xl border border-stone-800 overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full"> <thead> <tr class="border-b border-stone-800"> <th class="text-left px-5 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Product</th> <th class="text-left px-4 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Category</th> <th class="text-left px-4 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Price</th> <th class="text-left px-4 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Stock</th> <th class="text-left px-4 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Status</th> <th class="text-left px-4 py-4 text-[10px] text-stone-500 font-body uppercase tracking-widest">Actions</th> </tr> </thead> <tbody class="divide-y divide-stone-800"> ${products.map((p) => renderTemplate`<tr class="hover:bg-stone-800/50 transition-colors"> <td class="px-5 py-4"> <div class="flex items-center gap-3"> <img${addAttribute(p.images[0], "src")}${addAttribute(p.name, "alt")} class="w-12 h-14 object-cover object-top rounded-xl flex-shrink-0"> <div> <p class="font-body font-medium text-white text-sm">${p.name}</p> <p class="text-stone-500 text-xs font-body">${p.images.length} images</p> </div> </div> </td> <td class="px-4 py-4"> <span class="text-stone-300 text-sm font-body">${p.category}</span> </td> <td class="px-4 py-4"> <span class="text-pink-400 font-body font-semibold text-sm">₱${p.price.toLocaleString()}</span> </td> <td class="px-4 py-4"> <form method="POST" class="flex items-center gap-2"> <input type="hidden" name="action" value="stock"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <input type="number" name="stock"${addAttribute(p.stock, "value")} min="0" class="w-16 bg-stone-800 border border-stone-700 rounded-lg px-2 py-1 text-white text-xs font-body text-center focus:outline-none focus:border-pink-400"> <button type="submit" class="text-pink-400 hover:text-pink-300 text-xs font-body transition-colors">Save</button> </form> </td> <td class="px-4 py-4"> <form method="POST"> <input type="hidden" name="action" value="toggle"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <button type="submit"${addAttribute(`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${p.active ? "bg-green-900/50 text-green-400 hover:bg-green-900" : "bg-stone-800 text-stone-500 hover:bg-stone-700"}`, "class")}> ${p.active ? "Active" : "Hidden"} </button> </form> </td> <td class="px-4 py-4"> <div class="flex items-center gap-2"> <button${addAttribute(`editProduct(${JSON.stringify({ id: p.id, name: p.name, price: p.price, category: p.category, badge: p.badge || "", stock: p.stock, images: p.images.join("\n") })})`, "onclick")} class="text-stone-400 hover:text-white transition-colors p-1.5 hover:bg-stone-700 rounded-lg" title="Edit"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> </button> <form method="POST" onsubmit="return confirm('Delete this product?')"> <input type="hidden" name="action" value="delete"> <input type="hidden" name="id"${addAttribute(p.id, "value")}> <button type="submit" class="text-stone-400 hover:text-red-400 transition-colors p-1.5 hover:bg-stone-700 rounded-lg" title="Delete"> <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg> </button> </form> </div> </td> </tr>`)} </tbody> </table> </div> </div> </div> </main>  <div id="add-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"> <div class="bg-stone-900 rounded-3xl border border-stone-800 w-full max-w-lg max-h-[90vh] overflow-y-auto"> <div class="flex items-center justify-between p-6 border-b border-stone-800"> <h2 id="modal-title" class="font-display text-xl text-white font-light">Add Product</h2> <button onclick="closeModal()" class="text-stone-400 hover:text-white transition-colors"> <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"></path></svg> </button> </div> <form method="POST" class="p-6 space-y-4"> <input type="hidden" name="action" value="save"> <input type="hidden" name="id" id="modal-id" value=""> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Product Name *</label> <input type="text" name="name" id="modal-name" required placeholder="e.g. Fifi Set" class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400"> </div> <div class="grid grid-cols-2 gap-3"> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Price (₱) *</label> <input type="number" name="price" id="modal-price" required placeholder="1750" class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400"> </div> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Stock</label> <input type="number" name="stock" id="modal-stock" value="50" min="0" class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400"> </div> </div> <div class="grid grid-cols-2 gap-3"> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Category *</label> <select name="category" id="modal-category" class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400"> <option value="Sets">Sets</option> <option value="Tops">Tops</option> <option value="Dresses">Dresses</option> <option value="Bottoms">Bottoms</option> <option value="Outerwear">Outerwear</option> </select> </div> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Badge</label> <input type="text" name="badge" id="modal-badge" placeholder="New, Popular..." class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400"> </div> </div> <div> <label class="block text-xs text-stone-400 uppercase tracking-widest font-body mb-1.5">Image Paths (one per line)</label> <textarea name="images" id="modal-images" rows="4" placeholder="/images/products/fifi/IMG_9362.jpeg" class="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white text-sm font-body focus:outline-none focus:border-pink-400 resize-none"></textarea> <p class="text-stone-600 text-xs font-body mt-1">Enter image paths relative to /public</p> </div> <div class="flex gap-3 pt-2"> <button type="button" onclick="closeModal()" class="flex-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl py-3 text-sm font-body transition-colors">Cancel</button> <button type="submit" class="flex-1 bg-pink-400 hover:bg-pink-500 text-white rounded-xl py-3 text-sm font-body font-semibold transition-colors">Save Product</button> </div> </form> </div> </div> ` })} `;
}, "/home/claude/clc-shop/clc-export/src/pages/admin/products.astro", void 0);

const $$file = "/home/claude/clc-shop/clc-export/src/pages/admin/products.astro";
const $$url = "/admin/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
