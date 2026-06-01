import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), 'data');

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function readJSON<T>(file: string, defaultVal: T): T {
  ensureDir();
  const path = join(DATA_DIR, file);
  if (!existsSync(path)) return defaultVal;
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as T;
  } catch {
    return defaultVal;
  }
}

function writeJSON(file: string, data: unknown) {
  ensureDir();
  writeFileSync(join(DATA_DIR, file), JSON.stringify(data, null, 2));
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  phone?: string;
  address?: string;
  createdAt: string;
  isAdmin: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  badge?: string;
  stock: number;
  active: boolean;
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  qty: number;
}

export interface Order {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
  items: OrderItem[];
  total: number;
  paymentMethod: 'online' | 'cod';
  paymentStatus: 'pending' | 'paid' | 'failed';
  orderStatus: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  address: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Feedback {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  message: string;
  rating: number;
  createdAt: string;
  replied?: string;
}

// ─── Simple hash ──────────────────────────────────────────────────────────────

export function hashPassword(pw: string): string {
  let hash = 5381;
  for (let i = 0; i < pw.length; i++) {
    hash = ((hash << 5) + hash) + pw.charCodeAt(i);
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(16) + '_' + pw.length;
}

export function verifyPassword(pw: string, hash: string): boolean {
  return hashPassword(pw) === hash;
}

// ─── Users ────────────────────────────────────────────────────────────────────

export function getUsers(): User[] {
  const users = readJSON<User[]>('users.json', []);
  // Ensure admin always exists
  const adminExists = users.find(u => u.email.toLowerCase() === 'fionaysbel@gmail.com');
  if (!adminExists) {
    users.push({
      id: 'admin_001',
      email: 'Fionaysbel@gmail.com',
      passwordHash: hashPassword('clublachicashop'),
      name: 'Admin',
      createdAt: new Date().toISOString(),
      isAdmin: true,
    });
    writeJSON('users.json', users);
  }
  return users;
}

export function getUserById(id: string): User | undefined {
  return getUsers().find(u => u.id === id);
}

export function getUserByEmail(email: string): User | undefined {
  return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(email: string, password: string, name: string, phone?: string, address?: string): User {
  const users = getUsers();
  const user: User = {
    id: 'u_' + Date.now(),
    email,
    passwordHash: hashPassword(password),
    name,
    phone,
    address,
    createdAt: new Date().toISOString(),
    isAdmin: false,
  };
  users.push(user);
  writeJSON('users.json', users);
  return user;
}

export function updateUser(id: string, updates: Partial<Omit<User, 'id' | 'isAdmin'>>): User | null {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...updates };
  writeJSON('users.json', users);
  return users[idx];
}

// ─── Products ─────────────────────────────────────────────────────────────────

export function getProducts(): Product[] {
  const products = readJSON<Product[]>('products.json', []);
  if (products.length === 0) {
    // Seed with real products
    const seed: Product[] = [
      {
        id: 'prod_fifi',
        name: 'Fifi Set',
        price: 1750,
        category: 'Sets',
        badge: 'New',
        images: [
          '/images/products/fifi/184A1212.jpeg',
          '/images/products/fifi/184A1220.jpeg',
          '/images/products/fifi/184A1526.jpeg',
          '/images/products/fifi/IMG_9362.jpeg',
          '/images/products/fifi/IMG_9370.jpeg',
          '/images/products/fifi/IMG_9386.jpeg',
          '/images/products/fifi/IMG_9418.jpeg',
          '/images/products/fifi/IMG_9420.jpeg',
          '/images/products/fifi/IMG_9435.jpeg',
          '/images/products/fifi/IMG_9485.jpeg',
          '/images/products/fifi/IMG_9503.jpeg',
          '/images/products/fifi/IMG_9534.jpeg',
          '/images/products/fifi/IMG_9566.jpeg',
          '/images/products/fifi/IMG_9574.jpeg',
          '/images/products/fifi/IMG_9606.jpeg',
          '/images/products/fifi/IMG_9633.jpeg',
          '/images/products/fifi/IMG_9635.jpeg',
          '/images/products/fifi/IMG_9637.jpeg',
        ],
        stock: 50,
        active: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'prod_lachica',
        name: 'Lachica Set',
        price: 1750,
        category: 'Sets',
        badge: 'New',
        images: [
          '/images/products/lachica/IMG_9055.jpeg',
          '/images/products/lachica/IMG_9087.jpeg',
          '/images/products/lachica/IMG_9103.jpeg',
          '/images/products/lachica/IMG_9145.jpeg',
          '/images/products/lachica/IMG_9155.jpeg',
          '/images/products/lachica/IMG_9165.jpeg',
          '/images/products/lachica/IMG_9168.jpeg',
          '/images/products/lachica/IMG_9170.jpeg',
        ],
        stock: 50,
        active: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'prod_ari',
        name: 'Ari Top',
        price: 850,
        category: 'Tops',
        badge: 'New',
        images: [
          '/images/products/ari/IMG_3179.jpeg',
          '/images/products/ari/IMG_3217.jpeg',
          '/images/products/ari/IMG_3231.jpeg',
          '/images/products/ari/IMG_3258.jpeg',
          '/images/products/ari/IMG_3456.jpeg',
        ],
        stock: 50,
        active: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 'prod_yoyo',
        name: 'Yoyo Top',
        price: 900,
        category: 'Tops',
        badge: 'New',
        images: [
          '/images/products/yoyo/IMG_9659.jpeg',
          '/images/products/yoyo/IMG_9662.jpeg',
          '/images/products/yoyo/IMG_9669.jpeg',
          '/images/products/yoyo/IMG_9673.jpeg',
          '/images/products/yoyo/IMG_9684.jpeg',
          '/images/products/yoyo/IMG_9685.jpeg',
          '/images/products/yoyo/IMG_9693.jpeg',
          '/images/products/yoyo/IMG_9698.jpeg',
          '/images/products/yoyo/IMG_9699.jpeg',
        ],
        stock: 50,
        active: true,
        createdAt: new Date().toISOString(),
      },
    ];
    writeJSON('products.json', seed);
    return seed;
  }
  return products;
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find(p => p.id === id);
}

export function saveProduct(product: Product) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === product.id);
  if (idx >= 0) products[idx] = product;
  else products.push(product);
  writeJSON('products.json', products);
}

export function deleteProduct(id: string) {
  const products = getProducts().filter(p => p.id !== id);
  writeJSON('products.json', products);
}

// ─── Orders ───────────────────────────────────────────────────────────────────

export function getOrders(): Order[] {
  return readJSON<Order[]>('orders.json', []);
}

export function getOrdersByUser(userId: string): Order[] {
  return getOrders().filter(o => o.userId === userId);
}

export function getOrderById(id: string): Order | undefined {
  return getOrders().find(o => o.id === id);
}

export function createOrder(order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Order {
  const orders = getOrders();
  const newOrder: Order = {
    ...order,
    id: 'ord_' + Date.now(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  writeJSON('orders.json', orders);
  return newOrder;
}

export function updateOrder(id: string, updates: Partial<Order>): Order | null {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === id);
  if (idx === -1) return null;
  orders[idx] = { ...orders[idx], ...updates, updatedAt: new Date().toISOString() };
  writeJSON('orders.json', orders);
  return orders[idx];
}

// ─── Feedback ─────────────────────────────────────────────────────────────────

export function getFeedbacks(): Feedback[] {
  return readJSON<Feedback[]>('feedbacks.json', []);
}

export function createFeedback(fb: Omit<Feedback, 'id' | 'createdAt'>): Feedback {
  const feedbacks = getFeedbacks();
  const newFb: Feedback = {
    ...fb,
    id: 'fb_' + Date.now(),
    createdAt: new Date().toISOString(),
  };
  feedbacks.push(newFb);
  writeJSON('feedbacks.json', feedbacks);
  return newFb;
}

export function updateFeedback(id: string, updates: Partial<Feedback>) {
  const feedbacks = getFeedbacks();
  const idx = feedbacks.findIndex(f => f.id === id);
  if (idx >= 0) {
    feedbacks[idx] = { ...feedbacks[idx], ...updates };
    writeJSON('feedbacks.json', feedbacks);
  }
}
