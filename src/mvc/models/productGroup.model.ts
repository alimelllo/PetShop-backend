import mongoose from 'mongoose';
import { CreateSchema } from '../../helpers/createSchema';

const schema = CreateSchema({
  title: { type: String },
  categoryName: { type: String },
});

module.exports = mongoose.model('productGroup', schema);
