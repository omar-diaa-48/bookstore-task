import Author from "../models/author";
import { IModelGetManyResponse, IPagination } from "../utils/types";
import BaseController from "./base";

class AuthorController extends BaseController<Author> {
	getById(id: string): Promise<Author | null> {
		return Author.findByPk(id)
	}

	getMany(pagination: IPagination): Promise<IModelGetManyResponse<Author>> {
		return Author.findAndCountAll(pagination);
	}

	addOne(payload: Omit<Author, "id">): Promise<Author> {
		return Author.create(payload);
	}
}

export default AuthorController;