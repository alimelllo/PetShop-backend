import mongoose from 'mongoose';

export default () => {
  
  const mongoString = 'mongodb://root:k1yPykHOyy8vrvsnzP5R7D0w@luca.iran.liara.ir:33673/my-app?authSource=admin';

  mongoose.set('strictQuery', true);
  mongoose.connect(mongoString, {}, (error: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  });
};
