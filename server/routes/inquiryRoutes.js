import express from 'express';
import { body } from 'express-validator';
import { createInquiry, getInquiries, getInquiryCount } from '../controllers/inquiryController.js';

const router = express.Router();

// Validation middleware
const validateInquiry = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('message').notEmpty().withMessage('Message is required'),
  body('phone').optional().isString(),
];

// POST /api/inquiries - Submit an inquiry
router.post('/', validateInquiry, createInquiry);

// GET /api/inquiries - Get all inquiries (optional, for admin)
router.get('/', getInquiries);
router.get('/count', getInquiryCount);

export default router;