import { validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    res.status(201).json({
      success: true,
      data: savedContact,
      message: 'Contact form submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact forms',
      error: error.message,
    });
  }
}; 