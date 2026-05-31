# PlayStore Web Application

A modern, highly interactive, and premium App Store web application built using **React**, **Vite**, **Tailwind CSS v4**, and **DaisyUI v5**. The application allows users to discover, search, install, and uninstall apps, complete with dashboard statistics and interactive charting.

---

## 🌟 Key Features

1. **Fully Responsive Design**: Collapses cleanly to all viewports (Mobile, Tablet, Desktop) using Tailwind v4 fluid layouts and a custom mobile hamburger menu.
2. **Global App Installation State**: Custom React Context API manages installing/uninstalling apps, persisting states across layout pages without layout resets.
3. **Trending & Browse Catalog**: Filter and explore apps with ratings, sizes, categories, and developers details.
4. **App Details Page**: View details for any application and perform direct installation toggle controls.
5. **Interactive Dashboard**: Features responsive analytics charts (Pie Chart) powered by **Recharts** representing installed vs. uninstalled apps.
6. **Built-in Toast Notifications**: Elegant notifications showing success states when apps are installed/uninstalled using `react-toastify`.

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 + Vite 8 (extremely fast builds with Rolldown/ESBuild)
- **Styling**: Tailwind CSS v4 + DaisyUI v5 (responsive grids, fluid typography, dark/light theme support)
- **Charts**: Recharts (with responsive containers)
- **Routing**: React Router 7 (declarative route config with layouts)
- **Loaders**: React Spinners (`HashLoader`)

---

## 📂 Project Structure

```
c:/playstore
├── src/
│   ├── Components/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx    <-- Responsive header with hamburger menu
│   │   │   └── Navlink.jsx
│   │   ├── homepage/
│   │   │   ├── Banner.jsx    <-- Responsive layout hero section
│   │   │   ├── Stat.jsx      <-- Responsive flex statistics grid
│   │   │   └── TrendingApps.jsx
│   │   └── DisplayApps.jsx   <-- Reusable app card (Install/Uninstall toggle)
│   ├── Layout/
│   │   └── Setting.jsx
│   ├── Pages/
│   │   ├── Apps/
│   │   │   ├── Apps.jsx
│   │   │   └── AppDetails.jsx <-- Safe details viewer (no userContext crash)
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx  <-- Responsive Recharts analytics dashboard
│   │   ├── ErrorPage/
│   │   └── InstalledApps/
│   │       └── Installed.jsx  <-- Grid list for installed apps
│   ├── Router/
│   │   └── Routes.jsx
│   ├── assets/
│   ├── context.jsx            <-- React Context definitions
│   ├── main.jsx
│   └── Root.jsx               <-- Layout wrapper & installContext provider
├── public/
│   └── data.json              <-- App catalog database
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   *The server will run on `http://localhost:5173/` by default.*

### Building for Production

To compile and bundle assets for production deployment:
```bash
npm run build
```
The output files will be generated in the `dist` directory.
# Demo-play-store-React-Project
