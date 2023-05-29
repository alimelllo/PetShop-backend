import { Request, Response } from 'express';
import { Product } from '../models';

const ProductsList = async (req: Request | any, res: Response) => {
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

const AddProduct = async (req: Request | any, res: Response) => {
  try {

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      weight: req.body.weight,
      price: req.body.price,
      count: req.body.count,
      productImage: req.body.productImage
    });

    product.save().then(function (response) {
      res.status(200).send(response);
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

  } catch (err) {
    return console.log(res, err)
  }
};




export { ProductsList, AddProduct };
