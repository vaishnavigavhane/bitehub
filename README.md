# 🍔 BiteHub — Online Food Delivery Platform

BiteHub is a modern React.js food ordering web application where users can explore restaurants, browse menus by category, and view detailed restaurant dishes.
The project simulates a real-world food delivery UI similar to Swiggy/Zomato and demonstrates routing, dynamic rendering, and API-based data handling.

🌐 **Live Demo:** https://vaishnavigavhane.github.io/bitehub/

---

## 🚀 Features

 🏠 Home page with featured restaurants 
 🍕 Explore by category  
 🧭 Dynamic routing using restaurant ID 
 📄 Restaurant menu page with dishes listing 
 ⭐ Ratings and delivery time display 
 🔄 Data fetched from local API (JSON) 
 📱 Responsive modern UI 
 ⚡ Smooth animations using Framer Motion 

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router DOM
* Vite
* CSS / Tailwind
* Framer Motion

**Concepts Used**

* Dynamic Routing (`useParams`)
* Component Reusability
* Conditional Rendering
* Map Rendering Lists
* API Fetch Handling
* GitHub Pages Deployment (SPA routing)

---

## 📂 Project Structure

```
bitehub/
 ├ public/
 │   ├ Restaurants.json
 │   └ images/            → menu images (API based)
 │
 ├ src/
 │   ├ assets/images/     → UI images (logo, banner)
 │   ├ components/
 │   ├ pages/
 │   ├ layout/
 │   └ App.jsx
```

---

## 🔗 Routing Flow

Home → Restaurant List → Restaurant Menu (via ID)

Example:

```
/#/restaurants/2
```

---

## ⚙️ Installation & Run Locally

```bash
git clone https://github.com/vaishnavigavhane/bitehub.git
cd bitehub
npm install
npm run dev
```

---

## 🌍 Deployment

The project is deployed using **GitHub Pages**.

```bash
npm run deploy
```

---

## 📌 Future Improvements

* 🛒 Add to Cart functionality
* 🔐 Authentication (Login/Register)
* 💳 Checkout page
* 🔍 Search & filters
* 🌐 Backend integration (Node.js)

---

## 👩‍💻 Author

**Vaishnavi Gavhane**
Frontend Developer (React)

---

## ⭐ If you like this project

Give it a star on GitHub — it motivates me to build more!
