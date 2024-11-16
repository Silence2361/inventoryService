import productService from "../services/productService.js";

export const createProduct = async (req, res, next) => {
  const { name, plu } = req.body;
  productService
    .createProduct(name, plu)
    .then((product) => res.status(201).json(product))
    .catch(next);
};

export const getProducts = async (req, res, next) => {
  productService
    .getProducts()
    .then((products) => res.status(200).json(products))
    .catch(next);
};
