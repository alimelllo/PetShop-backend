import mongoose from 'mongoose';
import { CreateSchema } from '../../helpers/createSchema';

const schema = CreateSchema({
  name: { type: String },
  categry: { type: String },
  productImage : { type: String },
  price : { type: Number },
  discount : { type: Number },
  description : { type: String },
  availableCount  : { type: Number },
  weight  : { type: Number }
});

module.exports = mongoose.model('products', schema);
