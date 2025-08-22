# React Login & Sign-Up App

A simple **Login and Sign-Up application** built with React and React Router.  
This project demonstrates the use of **functional components**, **React state management**, **form validation**, **routing**, and **responsive styling**.

---

## ✨ Features
- **Login and Sign-Up screens** with React Router navigation
- **Reusable input component** with validation & error messages
- **Client-side validation**:
  - Name → only alphabets
  - Username → alphanumeric + `._-@` (4–20 chars)
  - Password → same as username rules but must be different from username
  - Confirm Password → must match Password
  - Email → only valid `@gmail.com`
  - Phone → must include country code (e.g., `+91 9876543210`)
- **Error messages** displayed inline under each field
- **Home page** after successful login (`/home`) showing confirmation message
- **Responsive design** (works on desktop & mobile)
- Data stored in **localStorage** for demo purposes

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

## 🚀 Run the Project
1. Install dependencies: `npm install`
2. Start the app: `npm start`
