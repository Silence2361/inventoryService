import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";
import { validateCreateProduct } from "../middleware/validators/productValidator.js";

const router = express.Router();

router.post("/", validateCreateProduct, createProduct);
router.get("/", getProducts);

export default router;
