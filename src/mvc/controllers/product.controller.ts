import { Request, Response } from 'express';
import { Product } from '../models';

const ProductsList = async (req: Request | any, res: Response) => {

//  res.setHeader('Content-Type', 'application/json')
 try {
     /* #swagger.responses[200] = {
       description: "Users fetched successfully",
       schema: { $ref: "#/definitions/users"
     } */
     Product.find({}).then((products: any) => {
      res.status(200).send(products);
    });
   } catch (err) {
     /* #swagger.responses[500] = {
       description: "Unknown server side error",
       schema:  { $ref: "#/definitions/server side error" }
     } */
     return console.log(res, err)
   }
};


export {  ProductsList };
