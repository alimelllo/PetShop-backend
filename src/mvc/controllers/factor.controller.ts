import { Request, Response } from "express";
import { Factors } from "../models";


const GetAllFactors = async (req: Request | any, res: Response) => {
  try {
    Factors.find({}).then((factors: any) => {
      res.status(200).send(factors);
    });
  } catch (err) {
    return console.log(res, err);
  }
};

const getFactorById = async (req: Request | any, res: Response) => {
  try {
    const factorId = req.params.factorId;
          Factors.find({ _id : factorId }).then((factor) => {
          res.status(200).send(factor);
        })
  } catch (err) {
    return console.log(res, err);
  }
};


const getAllFactorIds = (req: Request | any, res: Response) => {
  try {
    Factors.find().select('id')
      .then(function (response) {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(function (error) {
        res.status(500).send('/Internal Server Error');
        console.log(error);
      });
  } catch (err) {
    return console.log(res, err);
  }
};

const CreateFactor = async (req: Request | any, res: Response) => {
    try {      
      const newFactor = new Factors({
        ...req.body
      });
      newFactor
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


    const Payment = async (req: Request | any, res: Response) => {
      try {
        res.status(200).send('Payment Simulation');
      } catch (err) {
        return console.log(res, err);
      }
    };

export { 
    GetAllFactors ,
    getFactorById ,
    CreateFactor ,
    Payment ,
    getAllFactorIds
};
