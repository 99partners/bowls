// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import contactRoutes from './routes/contactRoutes.js';
// import inquiryRoutes from './routes/inquiryRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';
// import preorderRoutes from './routes/preorders.js';

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for all routes
// app.use(express.json());

// // Routes
// app.use('/api/contacts', contactRoutes);
// app.use('/api/inquiries', inquiryRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/preorders', preorderRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
//   // Start the server
//   const PORT = process.env.PORT || 5001;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });



import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import preorderRoutes from './routes/preorders.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/preorders', preorderRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // ✅ No deprecated options
    console.log('Connected to MongoDB');

    // Start server only after successful DB connection
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectDB();
