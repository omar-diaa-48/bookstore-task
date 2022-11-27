import { IAuthor } from "../models/author";
import { IPagination } from "../utils/types";
import BaseController from "./base";

const data: IAuthor[] = [
	{ id: "1", name: "Store 1" },
	{ id: "2", name: "Store 2" },
]

class AuthorController extends BaseController<IAuthor> {
	getById(id: string): Promise<IAuthor> {
		return Promise.resolve(data[0]);
	}

	getMany(pagination: IPagination): Promise<IAuthor[]> {
		return Promise.resolve(data);
	}
}

export default AuthorController;