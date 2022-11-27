import Author from '../models/author';
import Book from '../models/book';
import Store from '../models/store';

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	Store.sync({ alter: true })
	Author.sync({ alter: true })
	Book.sync({ alter: true })
}

export default dbInit;