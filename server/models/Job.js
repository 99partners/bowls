import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
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
  position: {
    type: String,
    required: [true, 'Position is required'],
  },
  experience: {
    type: String,
    required: [true, 'Experience is required'],
  },
  resume: {
    type: String,
    required: [true, 'Resume URL is required'],
  },
  coverLetter: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'interviewed', 'rejected', 'accepted'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

export default Job; 