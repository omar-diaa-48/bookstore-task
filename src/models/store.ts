import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../db/config";

export interface IStore {
	id: string;
	name: string;
	address: string;
}

class Store extends Model {
	public id!: string
	public name!: string
	public address!: string;
}

Store.init({
	id: {
		type: DataTypes.UUIDV4,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false
	}
}, {
	sequelize: sequelizeConnection
})

export default Store;