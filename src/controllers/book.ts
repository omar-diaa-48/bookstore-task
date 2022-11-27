import Book from "../models/book";
import { IModelGetManyResponse, IPagination } from "../utils/types";
import BaseController from "./base";

class BookController extends BaseController<Book> {
	getById(id: string): Promise<Book | null> {
		return Book.findByPk(id)
	}

	getMany(pagination: IPagination): Promise<IModelGetManyResponse<Book>> {
		return Book.findAndCountAll(pagination)
	}

	addOne(payload: Omit<Book, "id">): Promise<Book> {
		return Book.create(payload);
	}
}

export default BookController;