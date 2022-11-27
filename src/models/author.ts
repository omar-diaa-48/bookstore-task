import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
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
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	}
}, {
	sequelize: sequelizeConnection,
	timestamps: false,
	createdAt: false,
	updatedAt: false
})

Author.beforeCreate((record) => {
	record.id = uuidv4()
})

export default Author;