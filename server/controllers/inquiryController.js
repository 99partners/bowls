import { validationResult } from 'express-validator';
import Inquiry from '../models/Inquiry.js';

export const createInquiry = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const inquiry = new Inquiry(req.body);
    const savedInquiry = await inquiry.save();
    res.status(201).json({
      success: true,
      data: savedInquiry,
      message: 'Inquiry submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting inquiry',
      error: error.message,
    });
  }
};

export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries',
      error: error.message,
    });
  }
}; 