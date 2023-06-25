import mongoose from 'mongoose';
import { CreateSchema } from '../../helpers/createSchema';

const schema = CreateSchema({
  images: { type: String },
  productId : { type: String }
});

module.exports = mongoose.model('productImages', schema);


