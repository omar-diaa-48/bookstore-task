import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => console.log(`Backend is up and running on port ${PORT}, with environment ${NODE_ENV}`))