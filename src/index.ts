import dotenv from "dotenv";
import express from "express";
import connection from "./db/config";
import * as routes from "./routers";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use("/stores", routes.storeRouter)
app.use("/authors", routes.authorRouter)
app.use("/books", routes.bookRouter)

const start = async (): Promise<void> => {
	try {
		await connection.sync({ schema: process.env.DB_NAME });

		app.listen(PORT, () => console.log(`Backend is up and running on port ${PORT}, with environment ${NODE_ENV}`))
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();