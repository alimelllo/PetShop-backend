import { Express } from 'express';
import { authRouter, userRouter  } from '../mvc/routes';


export default (app: Express) => {
  app.use('/', authRouter);
  app.use( '/', userRouter);

};
