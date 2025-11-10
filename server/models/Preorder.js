import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  lineTotal: { type: Number, required: true },
}, { _id: false });

const PreorderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  items: { type: [OrderItemSchema], required: true, validate: v => v.length > 0 },
  totalQuantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
}, { collection: 'preorders' });

export default mongoose.model('Preorder', PreorderSchema);