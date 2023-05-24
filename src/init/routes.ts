import { Express } from 'express';
import { authRouter, userRouter , productRouter } from '../mvc/routes';


export default (app: Express) => {
  app.use('/', authRouter);
  app.use( '/', userRouter);
  app.use( '/', productRouter);
};
