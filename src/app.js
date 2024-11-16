import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(errorHandler);

app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Inventory Service is running!" });
});

export default app;
