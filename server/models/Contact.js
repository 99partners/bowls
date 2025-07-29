// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
//   },
//   phone: {
//     type: String,
//   },
//   subject: {
//     type: String,
//     required: [true, 'Subject is required'],
//   },
//   message: {
//     type: String,
//     required: [true, 'Message is required'],
//   },
// }, {
//   timestamps: true,
// });

// const Contact = mongoose.model('Contact', contactSchema);

// export default Contact; 
// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email'],
//   },
//   phone: {
//     type: String,
//     required: [true, 'Phone is required'],
//   },
//   message: {
//     type: String,
//     required: [true, 'Message is required'],
//   },
// }, {
//   timestamps: true,
// });

// const Contact = mongoose.model('Contact', contactSchema);
// export default Contact;
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address',
      ],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      match: [
        /^\d{10}$/,
        'Phone number must be exactly 10 digits',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);



const Contact = mongoose.model('Contact', contactSchema);

export default Contact;