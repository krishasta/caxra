/**
 * Caxra Machine Systems - Form Submission Service
 * Sends customer inquiries to Google Apps Script Web App,
 * which delivers the notification email directly to sales@caxra.in.
 */

export const APPS_SCRIPT_URL = 
  import.meta.env.VITE_APPS_SCRIPT_URL || 
  '';

/**
 * Sends inquiry payload to Google Apps Script Web App.
 * Uses mode: 'no-cors' with FormData to bypass cross-origin preflight restrictions
 * on Google Apps Script 302 redirects.
 * 
 * @param {Object} data 
 * @returns {Promise<{success: boolean, simulated?: boolean}>}
 */
export async function sendInquiryToSales(data) {
  const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;

  // Prepare FormData for reliable Apps Script intake
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key] || '');
  });
  formData.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  formData.append('targetEmail', 'sales@caxra.in');

  if (!scriptUrl) {
    // If user hasn't set VITE_APPS_SCRIPT_URL in .env yet, simulate successful delivery
    // and log the instructions in console so user is aware.
    console.info(
      '%c[Caxra Sales Lead]%c Inquiry captured for sales@caxra.in:\n',
      'background: #ff7026; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
      'color: #1f2853; font-weight: bold;',
      data
    );
    console.info(
      'To enable live email dispatch to sales@caxra.in, deploy google-apps-script/Code.gs and set VITE_APPS_SCRIPT_URL in your .env file or Vercel Environment Variables.'
    );
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, simulated: true };
  }

  try {
    // Google Apps Script redirect handled via 'no-cors'
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to submit inquiry to Google Apps Script:', error);
    throw error;
  }
}
