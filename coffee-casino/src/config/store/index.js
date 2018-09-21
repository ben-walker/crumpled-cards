import session from 'express-session';
import mongoose from 'mongoose';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const store = new MongoStore({ mongooseConnection: mongoose.connection });

export default store;
