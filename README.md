# Caxra Machine Systems — Official Web Platform

Modern, high-performance web platform for **Caxra Machine Systems**, built with **React 18**, **React Router**, **Vite**, **Tailwind CSS**, and **Three.js 3D Models**.

---

## 🚀 Key Features

1. **Interactive 3D Composter Simulation (Hero)**:
   - Full Waste-to-Resource flow: organic food waste falling into the hopper, digestion cycle with active green LED indicator, and compacted organic compost blocks sliding out of the discharge chute.
   - Interactive controls: *Feed Waste*, *Open Lid*, *Auto Rotate*, and *Reset View*.

2. **3D Product Configurator by KG (`/products`)**:
   - Interactive capacity selector: **10 kg/day** to **1000 kg/day** (1 Ton).
   - Real-time 3D model physical scaling and live front-emblem model designation update.
   - Real-time technical specs: dimensions, floor footprint, motor HP, ceramic heater rating, and applications.
   - Side-by-side technical comparison table across all 7 capacities.

3. **Core Machinery Portfolio**:
   - **Automatic Organic Waste Composters (OWC)** (10 kg/day to 1000 kg/day)
   - **Industrial Plastic Recycle Shredders** (20 kg/hr to 500 kg/hr)
   - **Special Purpose Machines (SPM)** (Turnkey custom automation)
   - **IoT-Based Smart Monitoring Telemetry** (Cloud telemetry, mobile alerts)

4. **Multi-Page Routing & Navigation**:
   - `/` — Home (Hero 3D Showcase, Machines & Systems, Industries Served)
   - `/products` — 3D Composter Model & Sizing Configurator by KG
   - `/about` — About Caxra Engineering & Indian Manufacturing
   - `/contact` — Factory Inquiry & Contact Desk

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚡ Deployment to Vercel

The project includes `vercel.json` configured for single-page routing rewrites:

```bash
# Push to GitHub, then import repository in Vercel:
# Build Command: npm run build
# Output Directory: dist
```

---

## 🇮🇳 Corporate Info

> *"Caxra Machine Systems is an engineering and manufacturing company that designs, builds and supports automatic organic waste composting machines from 10 kg/day to 1000 kg/day. It also delivers plastic recycle shredders, special purpose machines (SPM), custom machine design and IoT-based monitoring solutions."*
