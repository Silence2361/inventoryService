import express from "express";
import {
  createInventory,
  updateInventory,
} from "../controllers/inventoryController.js";
import { validateUpdateInventory } from "../middleware/validators/inventoryUpdateValidator.js";
import { validateCreateInventory } from "../middleware/validators/inventoryCreateValidator.js";

const router = express.Router();

router.post("/", validateCreateInventory, createInventory);
router.put("/", validateUpdateInventory, updateInventory);

export default router;
