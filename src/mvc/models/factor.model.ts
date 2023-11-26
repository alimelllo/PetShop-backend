import mongoose from 'mongoose';
import { CreateSchema } from '../../helpers/createSchema';

const schema = CreateSchema({
  user: { type: String },
  products: [],
  discount: { type: Number },
  finalPrice : { type: Number },
  payment: { type: String },
});

module.exports = mongoose.model('factors', schema);
