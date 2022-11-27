import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/config";

export interface IAuthor {
	id: string;
	name: string;
}

class Author extends Model {
	public id!: string
	public name!: string
}

Author.init({
	id: {
		type: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	}
}, {
	sequelize: sequelizeConnection
})

export default Author;