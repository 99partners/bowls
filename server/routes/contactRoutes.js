// // 
// import express from 'express';
// import { body } from 'express-validator';
// import { createContact, getContacts } from '../controllers/contactController.js';

// const router = express.Router();

// const validateContact = [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Valid email is required'),
//   body('phone').notEmpty().withMessage('Phone is required'),
//   body('message').notEmpty().withMessage('Message is required'),
// ];

// router.post('/', validateContact, createContact);
// router.get('/', getContacts);

// export default router;
import express from 'express';
import { body } from 'express-validator';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

const validateContact = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('message').notEmpty().withMessage('Message is required')
];

router.post('/', validateContact, createContact);
router.get('/', getContacts);

export default router;
