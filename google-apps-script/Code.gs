/**
 * =========================================================================
 * CAXRA MACHINE SYSTEMS PVT LTD - LEAD & INQUIRY EMAIL DISPATCHER
 * Destination: sales@caxra.in
 * =========================================================================
 *
 * HOW TO DEPLOY IN 2 MINUTES:
 * 1. Open Google Sheets (sheets.google.com) or Google Drive.
 * 2. Create a new Sheet named "Caxra Website Leads".
 * 3. In the top menu, click Extensions > Apps Script.
 * 4. Replace all code in the editor with this file's code.
 * 5. Click "Deploy" (top right) > "New deployment".
 * 6. Select type: "Web app".
 * 7. Set:
 *    - Description: "Caxra Contact Form Handler"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (IMPORTANT: allows public website submissions)
 * 8. Click "Deploy", authorize access with your Google account.
 * 9. Copy the generated "Web App URL" (starts with https://script.google.com/macros/s/...)
 * 10. Paste the URL into your project's .env file as:
 *     VITE_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
 */

// Target sales inbox
var SALES_EMAIL = "sales@caxra.in";

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for other concurrent submissions
  lock.tryLock(10000);

  try {
    var data = {};

    // Support both JSON body and FormData / URL-encoded parameters
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Extract customer inquiry details
    var name = data.name || "Not provided";
    var email = data.email || "Not provided";
    var phone = data.phone || "Not provided";
    var organization = data.organization || data.company || "Not provided";
    var product = data.product || "Organic Waste Composter (OWC)";
    var capacity = data.wasteCapacity || data.capacity || "General Capacity";
    var message = data.message || data.notes || "No additional project notes provided.";
    var timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Subject line
    var subject = "🚨 New Machinery Inquiry: " + product + " - " + name + " (" + organization + ")";

    // Professional HTML Email Template
    var htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 14px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1f2853 0%, #141b3b 100%); padding: 26px 28px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff; text-transform: uppercase;">CAXRA MACHINE SYSTEMS</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #ff7026; font-weight: 700; letter-spacing: 1px;">NEW WEBSITE INQUIRY RECEIVED</p>
        </div>

        <!-- Body -->
        <div style="padding: 28px; color: #334155;">
          <p style="font-size: 14px; margin-top: 0; line-height: 1.6; color: #475569;">
            A potential customer has submitted an inquiry on the Caxra Machine Systems website:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13.5px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b; width: 140px;">Customer Name:</td>
              <td style="padding: 11px 0; font-weight: 700; color: #0f172a;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Company / Org:</td>
              <td style="padding: 11px 0; font-weight: 600; color: #0f172a;">${organization}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Official Email:</td>
              <td style="padding: 11px 0;"><a href="mailto:${email}" style="color: #ff7026; text-decoration: none; font-weight: 700;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Phone / Mobile:</td>
              <td style="padding: 11px 0;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 700;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Product Category:</td>
              <td style="padding: 11px 0; font-weight: 700; color: #1f2853;">${product}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Required Capacity:</td>
              <td style="padding: 11px 0; color: #ff7026; font-weight: 700;">${capacity}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 11px 0; font-weight: 700; color: #64748b;">Received At:</td>
              <td style="padding: 11px 0; color: #64748b;">${timestamp}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="margin-top: 22px; padding: 18px; background: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
            <div style="font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Customer Requirements / Project Notes:</div>
            <div style="font-size: 13.5px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <!-- Quick Action Buttons -->
          <div style="margin-top: 26px; text-align: center;">
            <a href="mailto:${email}?subject=Re:%20Caxra%20Machine%20Systems%20Quotation%20-%20${encodeURIComponent(product)}" 
               style="display: inline-block; background: #ff7026; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 13px; margin-right: 8px;">
               ✉️ Reply to Customer via Email
            </a>
            <a href="tel:${phone}" 
               style="display: inline-block; background: #1f2853; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 13px;">
               📞 Call Customer Directly
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8;">
          Caxra Machine Systems Pvt Ltd • 29-3, Katoor Street, Kalapatti, Coimbatore 641048
        </div>
      </div>
    `;

    // Send the email via Google Apps Script MailApp
    MailApp.sendEmail({
      to: SALES_EMAIL,
      replyTo: email,
      subject: subject,
      htmlBody: htmlBody
    });

    // Optional: Log into connected Google Sheet
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        var tab = sheet.getActiveSheet();
        if (tab.getLastRow() === 0) {
          // Add table headers if first row is empty
          tab.appendRow([
            "Timestamp", 
            "Customer Name", 
            "Organization", 
            "Email", 
            "Phone", 
            "Product", 
            "Capacity", 
            "Notes / Message"
          ]);
        }
        tab.appendRow([timestamp, name, organization, email, phone, product, capacity, message]);
      }
    } catch (sheetErr) {
      // Continue even if sheet logging is disabled
    }

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Caxra Machine Systems Lead Dispatcher",
    destination: SALES_EMAIL
  })).setMimeType(ContentService.MimeType.JSON);
}

