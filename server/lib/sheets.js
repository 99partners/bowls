import { google } from 'googleapis';

async function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SA_CLIENT_EMAIL || process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = (process.env.GOOGLE_SA_PRIVATE_KEY || process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google Sheets credentials: client email or private key not set');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  await auth.authorize();
  return google.sheets({ version: 'v4', auth });
}

async function appendPreorderToSheet(preorder) {
  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  // Flatten items as a JSON string for readability, or join lines
  const orderDetails = preorder.items
    .map(i => `${i.name} x${i.quantity} @ ${i.unitPrice} = ${i.lineTotal}`)
    .join(' | ');

  const values = [[
    new Date().toISOString(),
    preorder.name,
    preorder.email,
    preorder.address,
    preorder.contact,
    orderDetails,
    preorder.totalQuantity,
    preorder.totalPrice,
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A1', // adjust if using a different sheet name
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}

export { appendPreorderToSheet };