import dotenv from "dotenv";
import express from "express";
import * as routes from "./routers";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use("/store", routes.storeRouter)
app.use("/author", routes.authorRouter)
app.use("/book", routes.bookRouter)

app.listen(PORT, () => console.log(`Backend is up and running on port ${PORT}, with environment ${NODE_ENV}`))