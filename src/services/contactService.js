/**
 * Caxra Machine Systems - Form Submission Service
 * Sends customer inquiries to Google Apps Script Web App,
 * which delivers the notification email directly to sales@caxra.in.
 */

export const APPS_SCRIPT_URL = 
  import.meta.env.VITE_APPS_SCRIPT_URL || 
  'https://script.google.com/macros/s/AKfycbxCk_3pN442GK45VZgzdVQdI7Y3lKNZejCfs3ZY4tjpXZfVqVQWZ00AkTcB0yBSmXSO/exec';

/**
 * Sends inquiry payload to Google Apps Script Web App.
 * Uses mode: 'no-cors' with FormData to bypass cross-origin preflight restrictions
 * on Google Apps Script 302 redirects.
 * 
 * @param {Object} data 
 * @returns {Promise<{success: boolean}>}
 */
export async function sendInquiryToSales(data) {
  const scriptUrl = APPS_SCRIPT_URL;

  // Prepare FormData for reliable Apps Script intake
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key] || '');
  });
  formData.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  formData.append('targetEmail', 'sales@caxra.in');

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

