import { IStore } from "../models/store";
import { IPagination } from "../utils/types";
import BaseController from "./base";

const data: IStore[] = [
	{ id: "1", name: "Store 1", address: "Address 1" },
	{ id: "2", name: "Store 2", address: "Address 2" },
]

class StoreController extends BaseController<IStore> {
	getById(id: string): Promise<IStore> {
		return Promise.resolve(data[0]);
	}

	getMany(pagination: IPagination): Promise<IStore[]> {
		return Promise.resolve(data);
	}
}

export default StoreController;