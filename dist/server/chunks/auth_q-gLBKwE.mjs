import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), "data");
function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}
function readJSON(file, defaultVal) {
  ensureDir();
  const path = join(DATA_DIR, file);
  if (!existsSync(path)) return defaultVal;
  try {
    return JSON.parse(readFileSync(path, "utf-8"));
  } catch {
    return defaultVal;
  }
}
function writeJSON(file, data) {
  ensureDir();
  writeFileSync(join(DATA_DIR, file), JSON.stringify(data, null, 2));
}
function hashPassword(pw) {
  let hash = 5381;
  for (let i = 0; i < pw.length; i++) {
    hash = (hash << 5) + hash + pw.charCodeAt(i);
    hash |= 0;
  }
  return "h_" + Math.abs(hash).toString(16) + "_" + pw.length;
}
function verifyPassword(pw, hash) {
  return hashPassword(pw) === hash;
}
function getUsers() {
  const users = readJSON("users.json", []);
  const adminExists = users.find((u) => u.email.toLowerCase() === "fionaysbel@gmail.com");
  if (!adminExists) {
    users.push({
      id: "admin_001",
      email: "Fionaysbel@gmail.com",
      passwordHash: hashPassword("clublachicashop"),
      name: "Admin",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      isAdmin: true
    });
    writeJSON("users.json", users);
  }
  return users;
}
function getUserById(id) {
  return getUsers().find((u) => u.id === id);
}
function getUserByEmail(email) {
  return getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
}
function createUser(email, password, name, phone, address) {
  const users = getUsers();
  const user = {
    id: "u_" + Date.now(),
    email,
    passwordHash: hashPassword(password),
    name,
    phone,
    address,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    isAdmin: false
  };
  users.push(user);
  writeJSON("users.json", users);
  return user;
}
function updateUser(id, updates) {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...updates };
  writeJSON("users.json", users);
  return users[idx];
}
function getProducts() {
  const products = readJSON("products.json", []);
  if (products.length === 0) {
    const seed = [
      {
        id: "prod_fifi",
        name: "Fifi Set",
        price: 1750,
        category: "Sets",
        badge: "New",
        images: [
          "/images/products/fifi/184A1212.jpeg",
          "/images/products/fifi/184A1220.jpeg",
          "/images/products/fifi/184A1526.jpeg",
          "/images/products/fifi/IMG_9362.jpeg",
          "/images/products/fifi/IMG_9370.jpeg",
          "/images/products/fifi/IMG_9386.jpeg",
          "/images/products/fifi/IMG_9418.jpeg",
          "/images/products/fifi/IMG_9420.jpeg",
          "/images/products/fifi/IMG_9435.jpeg",
          "/images/products/fifi/IMG_9485.jpeg",
          "/images/products/fifi/IMG_9503.jpeg",
          "/images/products/fifi/IMG_9534.jpeg",
          "/images/products/fifi/IMG_9566.jpeg",
          "/images/products/fifi/IMG_9574.jpeg",
          "/images/products/fifi/IMG_9606.jpeg",
          "/images/products/fifi/IMG_9633.jpeg",
          "/images/products/fifi/IMG_9635.jpeg",
          "/images/products/fifi/IMG_9637.jpeg"
        ],
        stock: 50,
        active: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "prod_lachica",
        name: "Lachica Set",
        price: 1750,
        category: "Sets",
        badge: "New",
        images: [
          "/images/products/lachica/IMG_9055.jpeg",
          "/images/products/lachica/IMG_9087.jpeg",
          "/images/products/lachica/IMG_9103.jpeg",
          "/images/products/lachica/IMG_9145.jpeg",
          "/images/products/lachica/IMG_9155.jpeg",
          "/images/products/lachica/IMG_9165.jpeg",
          "/images/products/lachica/IMG_9168.jpeg",
          "/images/products/lachica/IMG_9170.jpeg"
        ],
        stock: 50,
        active: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "prod_ari",
        name: "Ari Top",
        price: 850,
        category: "Tops",
        badge: "New",
        images: [
          "/images/products/ari/IMG_3179.jpeg",
          "/images/products/ari/IMG_3217.jpeg",
          "/images/products/ari/IMG_3231.jpeg",
          "/images/products/ari/IMG_3258.jpeg",
          "/images/products/ari/IMG_3456.jpeg"
        ],
        stock: 50,
        active: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "prod_yoyo",
        name: "Yoyo Top",
        price: 900,
        category: "Tops",
        badge: "New",
        images: [
          "/images/products/yoyo/IMG_9659.jpeg",
          "/images/products/yoyo/IMG_9662.jpeg",
          "/images/products/yoyo/IMG_9669.jpeg",
          "/images/products/yoyo/IMG_9673.jpeg",
          "/images/products/yoyo/IMG_9684.jpeg",
          "/images/products/yoyo/IMG_9685.jpeg",
          "/images/products/yoyo/IMG_9693.jpeg",
          "/images/products/yoyo/IMG_9698.jpeg",
          "/images/products/yoyo/IMG_9699.jpeg"
        ],
        stock: 50,
        active: true,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ];
    writeJSON("products.json", seed);
    return seed;
  }
  return products;
}
function getProductById(id) {
  return getProducts().find((p) => p.id === id);
}
function saveProduct(product) {
  const products = getProducts();
  const idx = products.findIndex((p) => p.id === product.id);
  if (idx >= 0) products[idx] = product;
  else products.push(product);
  writeJSON("products.json", products);
}
function deleteProduct(id) {
  const products = getProducts().filter((p) => p.id !== id);
  writeJSON("products.json", products);
}
function getOrders() {
  return readJSON("orders.json", []);
}
function getOrdersByUser(userId) {
  return getOrders().filter((o) => o.userId === userId);
}
function getOrderById(id) {
  return getOrders().find((o) => o.id === id);
}
function createOrder(order) {
  const orders = getOrders();
  const newOrder = {
    ...order,
    id: "ord_" + Date.now(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  orders.push(newOrder);
  writeJSON("orders.json", orders);
  return newOrder;
}
function updateOrder(id, updates) {
  const orders = getOrders();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return null;
  orders[idx] = { ...orders[idx], ...updates, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
  writeJSON("orders.json", orders);
  return orders[idx];
}
function getFeedbacks() {
  return readJSON("feedbacks.json", []);
}
function createFeedback(fb) {
  const feedbacks = getFeedbacks();
  const newFb = {
    ...fb,
    id: "fb_" + Date.now(),
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  feedbacks.push(newFb);
  writeJSON("feedbacks.json", feedbacks);
  return newFb;
}
function updateFeedback(id, updates) {
  const feedbacks = getFeedbacks();
  const idx = feedbacks.findIndex((f) => f.id === id);
  if (idx >= 0) {
    feedbacks[idx] = { ...feedbacks[idx], ...updates };
    writeJSON("feedbacks.json", feedbacks);
  }
}

const db = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createFeedback,
  createOrder,
  createUser,
  deleteProduct,
  getFeedbacks,
  getOrderById,
  getOrders,
  getOrdersByUser,
  getProductById,
  getProducts,
  getUserByEmail,
  getUserById,
  getUsers,
  hashPassword,
  saveProduct,
  updateFeedback,
  updateOrder,
  updateUser,
  verifyPassword
}, Symbol.toStringTag, { value: 'Module' }));

const SESSION_COOKIE = "clc_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;
function setSessionCookie(response, userId) {
  const token = Buffer.from(JSON.stringify({ userId, ts: Date.now() })).toString("base64");
  const cookie = `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}`;
  return { token, cookie };
}
function getSessionUser(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = parseCookies(cookieHeader);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    if (!decoded?.userId) return null;
    return getUserById(decoded.userId) || null;
  } catch {
    return null;
  }
}
function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
}
function parseCookies(cookieHeader) {
  const result = {};
  cookieHeader.split(";").forEach((part) => {
    const [key, ...vals] = part.trim().split("=");
    if (key) result[key.trim()] = decodeURIComponent(vals.join("=").trim());
  });
  return result;
}
function getCart(request) {
  const cookies = parseCookies(request.headers.get("cookie") || "");
  const cartStr = cookies["clc_cart"];
  if (!cartStr) return [];
  try {
    return JSON.parse(Buffer.from(cartStr, "base64").toString("utf-8"));
  } catch {
    return [];
  }
}
function encodeCart(items) {
  return Buffer.from(JSON.stringify(items)).toString("base64");
}

export { createFeedback as a, createOrder as b, clearSessionCookie as c, createUser as d, db as e, deleteProduct as f, encodeCart as g, getCart as h, getFeedbacks as i, getOrderById as j, getOrders as k, getOrdersByUser as l, getProductById as m, getProducts as n, getSessionUser as o, getUserByEmail as p, getUsers as q, setSessionCookie as r, saveProduct as s, updateOrder as t, updateFeedback as u, updateUser as v, verifyPassword as w };
