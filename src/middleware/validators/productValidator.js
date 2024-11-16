import { body, validationResult } from "express-validator";

export const validateCreateProduct = [
  body("name").notEmpty().withMessage("Name is required"),

  body("plu").notEmpty().withMessage("PLU is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
