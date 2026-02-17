# 🍔 BiteHub — Online Food Delivery Platform

BiteHub is a modern React.js food ordering web application where users can explore restaurants, browse menus by category, and view detailed restaurant dishes.

The project simulates a real-world food delivery UI similar to Swiggy/Zomato and demonstrates routing, dynamic rendering, API-based data handling, and React Hooks usage.

🌐 **Live Demo:** https://vaishnavigavhane.github.io/bitehub/

---

## 🚀 Features

* 🏠 Home page with restaurant listings
* 🍕 Explore by category
* 🧭 Dynamic routing using restaurant ID
* 📄 Restaurant menu page with dishes
* ⭐ Ratings & delivery time display
* 🔄 Data fetched from local API (JSON)
* ⚠️ Error handling using try–catch
* 📱 Fully responsive UI
* ⚡ Smooth animations using Framer Motion

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router DOM
* Vite
* Tailwind CSS
* Framer Motion

---

## 🧠 React Concepts Used

* `useState` → Manage restaurants & menu state
* `useEffect` → Fetch API data on component load
* `useParams` → Dynamic routing with restaurant ID
* Conditional Rendering → Loading state handling
* Map Rendering → Dynamic UI generation
* try–catch → API error handling
* Component-based architecture
* SPA Routing with Hash Router

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

Deployed using GitHub Pages (SPA compatible)

```bash
npm run deploy
```

---

## 📌 Future Improvements

* 🛒 Add to Cart functionality
* 🔐 Authentication (Login/Register)
* 🔍 Search & filters
* 💳 Checkout page
* 🌐 Backend integration (Node.js / Firebase)

---

## 👩‍💻 Author

**Vaishnavi Gavhane**
Frontend Developer (React)

---

⭐ If you like this project, give it a star!
