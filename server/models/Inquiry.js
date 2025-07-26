import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  phone: {
    type: String,
  },
}, {
  timestamps: true,
});

const Inquiry = mongoose.model('Inquiry', inquirySchema);

export default Inquiry; 