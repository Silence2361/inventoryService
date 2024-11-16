import { body, validationResult } from "express-validator";

export const validateUpdateInventory = [
  body("id").notEmpty().withMessage("ID is required"),

  body("stockOnShelf")
    .isInt({ min: 0 })
    .withMessage("Stock on shelf must be a non-negative integer"),

  body("stockInOrder")
    .isInt({ min: 0 })
    .withMessage("Stock in order must be a non-negative integer"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
