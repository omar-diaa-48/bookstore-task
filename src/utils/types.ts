export interface IPagination {
	limit: number,
	offset: number
}

export interface IModelGetManyResponse<T> {
	rows: T[];
	count: number;
}