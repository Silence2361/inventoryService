import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Inventory Service is running!" });
});

export default app;
