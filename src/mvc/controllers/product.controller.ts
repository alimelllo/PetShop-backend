import { Request, Response } from "express";
import { Product, ProductGroup, ProductImages } from "../models";

const ProductsList = async (req: Request | any, res: Response) => {
  try {
    /* #swagger.responses[200] = {
      description: "Users fetched successfully",
      schema: { $ref: "#/definitions/users"
    } */
    let searchText = req.params.text;
    let {productGroup} = req.params;
    const {pageNumber}=req.params;

    if( searchText === "null"){
      searchText = "";
    }
    if(productGroup === "null"){
      productGroup = "";
    }
   
    Product.find({
      name: { $regex: searchText ? searchText : "", $options: "i" },
      productGroup: { $regex: productGroup ? productGroup : "" , $options: "i" },
    }).then((products: any) => {
        const start = (Number(pageNumber) * 10) - 10;
        const dataArr = [];
        for ( let i = start ; i < Number(pageNumber) * 10; i++ ) {
          products[i] && dataArr.push(products[i]);
        }
      res.status(200).send(dataArr);
    });
  } catch (err) {
    /* #swagger.responses[500] = {
      description: "Unknown server side error",
      schema:  { $ref: "#/definitions/server side error" }
    } */
    return console.log(res, err);
  }
};

const GetAllProductImages = async (req: Request | any, res: Response) => {
  try {
    const productId = req.params.productId;
        ProductImages.find({ productId : productId }).then((images) => {
          res.status(200).send(images);

        })
  } catch (err) {
    return console.log(res, err);
  }
};

const getProductById = async (req: Request | any, res: Response) => {
  try {
    const productId = req.params.productId;
        Product.find({ _id : productId }).then((product) => {
          res.status(200).send(product);
        })
  } catch (err) {
    return console.log(res, err);
  }
};


const getAllProductIds = (req: Request | any, res: Response) => {
  try {
    Product.find().select('id')
      .then(function (response) {
        res.status(200).send(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    return console.log(res, err);
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
      productImage: req.body.productImage,
      productGroup: req.body.productGroup
    });

    product
      .save()
      .then(function (response) {
        res.status(200).send(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    return console.log(res, err);
  }
};

const AddProductGroup = async (req: Request | any, res: Response) => {
  try {
    const productGroup = new ProductGroup({
      title: req.body.title,
      categoryName: req.body.categoryName,
    });

    productGroup
      .save()
      .then(function (response) {
        res.status(200).send(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    return console.log(res, err);
  }
};


const AddProductImage = async (req: Request | any, res: Response) => {
  try {
    const { productId , productImage } = req.body;
    
    const newProductImage = new ProductImages({
      productId: productId,
      images:  productImage,
    });

    newProductImage
      .save()
      .then(function (response) {
        res.status(200).send(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
     
    
   } catch (err) {
        return console.log(res, err);
   }
  }



const ProductsGroupsList = async (req: Request | any, res: Response) => {
  try {
    ProductGroup.find({}).then((ProductGroups: any) => {
      res.status(200).send(ProductGroups);
    });
  } catch (err) {
    return console.log(res, err);
  }
};

export { 
  ProductsList ,
  AddProduct ,
  AddProductGroup ,
  ProductsGroupsList , 
  getAllProductIds , 
  AddProductImage , 
  GetAllProductImages , 
  getProductById };
