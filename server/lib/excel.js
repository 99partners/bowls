import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultFilePath = process.env.EXCEL_FILE_PATH || path.join(__dirname, '..', 'data', 'preorders.xlsx');

async function ensureWorkbook(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const workbook = new ExcelJS.Workbook();
  if (fs.existsSync(filePath)) {
    try {
      await workbook.xlsx.readFile(filePath);
      return workbook;
    } catch (e) {
      // If existing file is corrupted, start fresh
    }
  }

  const sheet = workbook.addWorksheet('Orders');
  sheet.columns = [
    { header: 'Timestamp', key: 'timestamp', width: 24 },
    { header: 'Name', key: 'name', width: 20 },
    { header: 'Email', key: 'email', width: 28 },
    { header: 'Contact', key: 'contact', width: 18 },
    { header: 'Address', key: 'address', width: 32 },
    { header: 'Order Details', key: 'orderDetails', width: 50 },
    { header: 'Total Quantity', key: 'totalQuantity', width: 16 },
    { header: 'Total Price', key: 'totalPrice', width: 14 },
  ];

  await workbook.xlsx.writeFile(filePath);
  return workbook;
}

async function appendPreorderToExcel(preorder, filePath = defaultFilePath) {
  const workbook = await ensureWorkbook(filePath);
  const sheet = workbook.worksheets[0];

  const orderDetails = (preorder.items || [])
    .map(i => `${i.name} x${i.quantity} @ ${i.unitPrice} = ${i.lineTotal}`)
    .join(' | ');

  sheet.addRow({
    timestamp: new Date().toISOString(),
    name: preorder.name,
    email: preorder.email,
    contact: preorder.contact,
    address: preorder.address,
    orderDetails,
    totalQuantity: preorder.totalQuantity,
    totalPrice: preorder.totalPrice,
  });

  await workbook.xlsx.writeFile(filePath);
}

export { appendPreorderToExcel };