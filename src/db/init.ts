import Store from '../models/store';

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
	Store.sync({ alter: isDev })
}

export default dbInit;