import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelizeConnection from "../db/config";

export interface IBook {
	id: string;
	name: string;
	pages: number;
	author_id?: string;
}

class Book extends Model {
	public id!: string
	public name!: string
	public pages!: number;
}

Book.init({
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	},
	pages: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique: false
	}
}, {
	sequelize: sequelizeConnection,
	timestamps: false,
	createdAt: false,
	updatedAt: false
})

Book.beforeCreate((record) => {
	record.id = uuidv4()
})

export default Book;
