import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  inquiryType: {
    type: String,
    default: 'corporate',
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  investment: {
    type: String,
  },
  experience: {
    type: String,
  },
  message: {
    type: String,
  },
}, {
  timestamps: true,
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry;