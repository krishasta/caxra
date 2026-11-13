# Caxra Machine Systems - Google Apps Script Form Setup

This setup allows your website to send customer inquiries directly to **sales@caxra.in** without needing any backend server or paying for email services.

---

## 🚀 2-Minute Setup Instructions

### Step 1: Open Google Sheets
1. Go to **[sheets.google.com](https://sheets.google.com/)** and create a **New Blank Spreadsheet**.
2. Rename the spreadsheet to **`Caxra Website Inquiries`**.

---

### Step 2: Open the Apps Script Editor
1. In the top Google Sheets menu, click **Extensions** > **Apps Script**.
2. Delete any code in the editor window (`myFunction()`).
3. Open the file **[`google-apps-script/Code.gs`](./Code.gs)** in this project, copy the entire code, and paste it into the Apps Script editor.
4. Click the **Save** icon (Floppy disk 💾).

---

### Step 3: Deploy as Web App
1. At the top right of the Apps Script window, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (⚙️) next to *Select type* and choose **Web app**.
3. Fill in the deployment settings:
   - **Description**: `Caxra Website Contact Form`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: `Anyone` *(⚠️ IMPORTANT: Must be set to "Anyone" so visitors on your website can submit without logging into Google).*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click *Authorize access*.
   - Choose your Google account.
   - Click *Advanced* (bottom left).
   - Click *Go to Caxra Website Inquiries (unsafe)*.
   - Click *Allow*.
6. You will see a **Web app URL** like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Click **Copy** to copy this URL.

---

### Step 4: Add URL to Your Website

#### A. Local Development:
Open `.env` in the root of this project and paste your URL:
```env
VITE_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

#### B. Vercel Production Deployment:
1. Go to your **[Vercel Dashboard](https://vercel.com/)** and select the **`caxra`** project.
2. Go to **Settings** > **Environment Variables**.
3. Add a new variable:
   - **Key**: `VITE_APPS_SCRIPT_URL`
   - **Value**: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
4. Click **Save** and trigger a redeploy (or push any commit to GitHub).

---

## 📩 What Happens When a Customer Submits the Form:
1. An instant email is dispatched to **`sales@caxra.in`** containing:
   - Customer Full Name
   - Organization / Company
   - Official Email & Phone Number
   - Selected Machinery (e.g. OWC Composter, Shredder, SPM)
   - Selected Capacity (e.g. 50 kg/day)
   - Project Notes & Dimensions
   - Submission Timestamp
   - Quick one-click "Reply to Customer" and "Call Customer" buttons
2. A new lead row is automatically logged into your Google Sheet for easy CRM tracking!
