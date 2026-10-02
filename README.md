# 🍅 Tomato - Food Delivery Web Application

Tomato is a full-stack food delivery web application built using the MERN stack.

The project includes a customer-facing food ordering website, an admin dashboard for managing food items and orders, and a Node.js/Express backend connected to MongoDB.

---

## 🚀 Features

### 👤 User Side

- User registration and login
- JWT-based authentication
- Browse available food items
- Food categories and food listing
- Add food items to cart
- Increase/decrease cart quantities
- Remove items from cart
- View cart total
- Place food orders
- View previous orders
- Order verification
- Address management during checkout

### 💳 Payments

- Stripe payment integration
- Online payment checkout
- Payment verification
- Order payment status management

### 👨‍💼 Admin Panel

- Admin authentication
- Add new food items
- Upload food images
- View food items
- Manage food items
- View customer orders
- Update order status

### 🗄️ Backend

- REST API built with Node.js and Express
- MongoDB database
- Mongoose ODM
- JWT authentication
- Password hashing with bcrypt
- Food management APIs
- Cart APIs
- Order APIs
- User authentication APIs
- Stripe payment integration
- Image upload handling

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- CSS
- Axios
- React Router

### Admin Panel

- React.js
- JavaScript
- CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Stripe

### Development Tools

- Vite
- Git
- GitHub
- VS Code

---

## 📁 Project Structure

```text
Tomato/
│
├── admin/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
