import dotenv from "dotenv";
import { Sequelize } from 'sequelize';

dotenv.config();

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST as string
const dbPassword = process.env.DB_PASSWORD as string
const dbPort = process.env.DB_PORT as string

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, { host: dbHost, port: Number(dbPort), dialect: "mysql" })

export default sequelizeConnection