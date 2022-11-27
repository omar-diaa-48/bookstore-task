import { IBook } from "../models/book";
import { IPagination } from "../utils/types";
import BaseController from "./base";

const data: IBook[] = [
	{ id: "1", name: "Book 1", pages: 10 },
	{ id: "2", name: "Book 2", pages: 32 },
]

class AuthorController extends BaseController<IBook> {
	getById(id: string): Promise<IBook> {
		return Promise.resolve(data[0]);
	}

	getMany(pagination: IPagination): Promise<IBook[]> {
		return Promise.resolve(data);
	}
}

export default AuthorController;