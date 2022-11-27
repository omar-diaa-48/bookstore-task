import Store from "../models/store";
import { IModelGetManyResponse, IPagination } from "../utils/types";
import BaseController from "./base";

class StoreController extends BaseController<Store> {
	getById(id: string): Promise<Store | null> {
		return Store.findByPk(id)
	}

	getMany(pagination: IPagination): Promise<IModelGetManyResponse<Store>> {
		const { limit, offset } = pagination
		return Store.findAndCountAll(pagination)
	}

	addOne(payload: Omit<Store, "id">): Promise<Store> {
		return Store.create(payload);
	}
}

export default StoreController;