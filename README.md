# Club La Chica — Fully Functional Shop

## Setup & Run

```bash
# Install dependencies
pnpm install
# OR: npm install

# Development server
pnpm dev
# OR: npm run dev

# Production build
pnpm build
node dist/server/entry.mjs
```

## Admin Access
- URL: http://localhost:4321/admin
- Email: Fionaysbel@gmail.com
- Password: clublachicashop

## Features
- User registration & login
- Shopping cart (cookie-based)
- Product detail pages with image gallery
- Checkout (Online Pay / Cash on Delivery)
- Order confirmation & tracking
- My Orders page
- My Account / Profile
- Feedback / Reviews page
- Admin Dashboard with:
  - Product management (add/edit/delete/toggle/stock)
  - Order management (update status & payment)
  - Customer list with order totals
  - Feedback viewer with reply function

## Data Storage
All data is stored as JSON files in the `/data` folder (auto-created on first run):
- data/users.json
- data/products.json
- data/orders.json
- data/feedbacks.json
# clublachicashop
