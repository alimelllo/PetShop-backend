import { Request, Response } from 'express';
import { Product , ProductGroup } from '../models';

const ProductsList = async (req: Request | any, res: Response) => {
  try {
    /* #swagger.responses[200] = {
      description: "Users fetched successfully",
      schema: { $ref: "#/definitions/users"
    } */
    const searchText = req.params.text;
  
    Product.find({"name": { "$regex": searchText ? searchText : "", "$options": "i" }}).then((products: any) => {
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



const AddProductGroup = async (req: Request | any, res: Response) => {
  try {

    const productGroup = new ProductGroup({
      title: req.body.title,
      categoryName: req.body.categoryName,
    });

    productGroup.save().then(function (response) {
      res.status(200).send(response);
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

  } catch (err) {
    return console.log(res, err)
  }
};

const ProductsGroupsList = async (req: Request | any, res: Response) => {
  try {
    const searchText = req.params.text;
    ProductGroup.find({}).then((ProductGroups: any) => {
      res.status(200).send(ProductGroups);
    });
  } catch (err) {
    return console.log(res, err)
  }
};




export { ProductsList, AddProduct , AddProductGroup , ProductsGroupsList };
