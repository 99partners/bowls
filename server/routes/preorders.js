// import express from 'express';
// import Preorder from '../models/Preorder.js';
// import { appendPreorderToSheet } from '../lib/sheets.js';
// import { appendPreorderToExcel } from '../lib/excel.js';

// const router = express.Router();

// const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// router.post('/', async (req, res) => {
//   try {
//     const { name, email, contact, address, items } = req.body;

//     if (!name || !email || !contact || !address) {
//       return res.status(400).json({ error: 'Missing required user fields' });
//     }
//     if (!isValidEmail(email)) {
//       return res.status(400).json({ error: 'Invalid email format' });
//     }
//     if (!Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ error: 'At least one order item required' });
//     }

//     const normalized = items.map(it => {
//       const quantity = Math.max(1, Number(it.quantity || 1));
//       const unitPrice = Number(it.unitPrice || 0);
//       return {
//         itemId: String(it.itemId || it._id || ''),
//         name: String(it.name),
//         unitPrice,
//         quantity,
//         lineTotal: unitPrice * quantity,
//       };
//     });

//     const totalQuantity = normalized.reduce((s, i) => s + i.quantity, 0);
//     const totalPrice   = normalized.reduce((s, i) => s + i.lineTotal, 0);

//     const preorder = await Preorder.create({
//       name, email, contact, address,
//       items: normalized,
//       totalQuantity,
//       totalPrice,
//     });

//     console.log('[MongoDB] Preorder saved:', preorder._id);

//     // Try Google Sheets (if configured), but do not fail on error
//     try {
//       await appendPreorderToSheet(preorder);
//       console.log('[Google Sheets] Preorder appended for:', preorder._id);
//     } catch (sheetErr) {
//       console.error('[Google Sheets] Append failed:', sheetErr.message || sheetErr);
//     }

//     // Always append to local Excel for guaranteed logging
//     try {
//       await appendPreorderToExcel(preorder);
//       console.log('[Excel] Preorder appended to local file for:', preorder._id);
//     } catch (excelErr) {
//       console.error('[Excel] Append failed:', excelErr.message || excelErr);
//     }

//     res.status(201).json({ ok: true, preorderId: preorder._id });
//   } catch (err) {
//     console.error('Preorder error:', err);
//     res.status(500).json({ error: 'Server error', details: err.message });
//   }
// });

// export default router;


import express from 'express';
import Preorder from '../models/Preorder.js';
import { appendPreorderToSheet } from '../lib/sheets.js';
import { appendPreorderToExcel } from '../lib/excel.js';

const router = express.Router();

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// ✅ ADD THIS GET ROUTE
router.get('/', async (req, res) => {
  try {
    const preorders = await Preorder.find().sort({ createdAt: -1 }).limit(100);
    res.json({
      success: true,
      count: preorders.length,
      data: preorders
    });
  } catch (error) {
    console.error('Get preorders error:', error);
    res.status(500).json({ error: 'Failed to fetch preorders' });
  }
});

// Your existing POST route
router.post('/', async (req, res) => {
  try {
    const { name, email, contact, address, items } = req.body;

    if (!name || !email || !contact || !address) {
      return res.status(400).json({ error: 'Missing required user fields' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'At least one order item required' });
    }

    const normalized = items.map(it => {
      const quantity = Math.max(1, Number(it.quantity || 1));
      const unitPrice = Number(it.unitPrice || 0);
      return {
        itemId: String(it.itemId || it._id || ''),
        name: String(it.name),
        unitPrice,
        quantity,
        lineTotal: unitPrice * quantity,
      };
    });

    const totalQuantity = normalized.reduce((s, i) => s + i.quantity, 0);
    const totalPrice   = normalized.reduce((s, i) => s + i.lineTotal, 0);

    const preorder = await Preorder.create({
      name, email, contact, address,
      items: normalized,
      totalQuantity,
      totalPrice,
    });

    console.log('[MongoDB] Preorder saved:', preorder._id);

    // Try Google Sheets (if configured), but do not fail on error
    try {
      await appendPreorderToSheet(preorder);
      console.log('[Google Sheets] Preorder appended for:', preorder._id);
    } catch (sheetErr) {
      console.error('[Google Sheets] Append failed:', sheetErr.message || sheetErr);
    }

    // Always append to local Excel for guaranteed logging
    try {
      await appendPreorderToExcel(preorder);
      console.log('[Excel] Preorder appended to local file for:', preorder._id);
    } catch (excelErr) {
      console.error('[Excel] Append failed:', excelErr.message || excelErr);
    }

    res.status(201).json({ ok: true, preorderId: preorder._id });
  } catch (err) {
    console.error('Preorder error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

export default router;