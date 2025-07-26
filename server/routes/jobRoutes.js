import express from 'express';
import { body, validationResult } from 'express-validator';
import Job from '../models/Job.js';

const router = express.Router();

// Validation middleware
const validateJobApplication = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('experience').notEmpty().withMessage('Experience is required'),
  body('resume').notEmpty().withMessage('Resume URL is required'),
];

// Submit job application
router.post('/', validateJobApplication, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const jobApplication = new Job(req.body);
    const savedApplication = await jobApplication.save();
    
    res.status(201).json({
      success: true,
      data: savedApplication,
      message: 'Job application submitted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting job application',
      error: error.message,
    });
  }
});

// Get all job applications (could be admin only in the future)
router.get('/', async (req, res) => {
  try {
    const applications = await Job.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching job applications',
      error: error.message,
    });
  }
});

export default router; 