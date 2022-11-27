import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
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
		type: DataTypes.STRING,
		primaryKey: true,
		unique: true
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
	sequelize: sequelizeConnection,
	timestamps: false,
	createdAt: false,
	updatedAt: false
})

Store.beforeCreate((record) => {
	record.id = uuidv4()
})

export default Store;