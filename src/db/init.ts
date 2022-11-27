import Author from '../models/author';
import Book from '../models/book';
import Store from '../models/store';

const dbInit = () => {
	Store.sync({ alter: true })
	Author.sync({ alter: true })
	Book.sync({ alter: true })
}

export default dbInit;