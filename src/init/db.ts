import mongoose from 'mongoose';

export default () => {
  
  const mongoString = 'mongodb+srv://alimelllo:g6IomNjSFAHnJq1w@cluster0.i5ilkb5.mongodb.net';

  mongoose.set('strictQuery', true);
  mongoose.connect(mongoString, {}, (error: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  });
};
