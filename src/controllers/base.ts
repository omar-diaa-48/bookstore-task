import { IPagination } from "../utils/types";

abstract class BaseController<T> {
	abstract getById(id: string): Promise<T>;
	abstract getMany(pagination: IPagination): Promise<T[]>;
}

export default BaseController;