import { IModelGetManyResponse, IPagination } from "../utils/types";

abstract class BaseController<T> {
	abstract getById(id: string): Promise<T | null>;
	abstract getMany(pagination: IPagination): Promise<IModelGetManyResponse<T>>;
	abstract addOne(payload: Omit<T, "id">): Promise<T>;
}

export default BaseController;