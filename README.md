# Antivirus System Management - Web Technologies Project

This project was developed as an **examination assignment** for the **"Web Technologies"** course. It is a full-stack application demonstrating a central control panel for monitoring computer security statuses.

---

## 🎓 Project Context
* **Course:** Web Technologies
* **Assignment:** Examination Work / Final Project
* **Student:** [Illia / downloaddms]
* **Stack:** React (Frontend) + Node.js/Express (Backend)

---

## 🛠 Features
- **Dashboard:** View a list of monitored computers and their current security status.
- **Data Entry:** Add new scan reports via a dynamic form.
- **Real-time Interaction:** Frontend communicates with a local Express server via REST API.
- **Status Tracking:** Visual indicators for "Safe" vs "At Risk" statuses.

---

## 🚀 How to Run Locally

Since this is a full-stack project, you need to start both the server and the client.

### 1. Start the Server (Backend)

Navigate to the server directory and start the Node process:
```bash
cd server
npm install
node index.js
```
The server will be running on `http://localhost:5000`

### 2. Start the Client (Frontend)

Open a new terminal, navigate to the client directory, and start the React app:
```bash
cd client
npm install
npm start
```
The application will open automatically at `http://localhost:3000`

---

## 📂 Project Structure

* **`/client`** — React.js application (Frontend part).
* **`/server`** — Node.js & Express server (Backend part).
* **`package.json`** — Metadata, dependencies, and scripts for the whole project.

---

### 📝 Technical Highlights

* **Architecture**: Client-Server separation.
* **CORS**: Configured for cross-origin requests between development ports.
* **State Management**: Utilizes React hooks (`useState`, `useEffect`).

---

*Developed for academic purposes within the Web Technologies course.*