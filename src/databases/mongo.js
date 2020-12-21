// Core
import mongoose from 'mongoose';
import dg from 'debug';
// Instruments
import {
  getDatabaseHost, getDatabasePort, getDatabaseName, getDatabaseUser, getDatabasePassword,
} from 'env';


const debug = dg('db:');
const DB_HOST = getDatabaseHost();
const DB_PORT = getDatabasePort();
const DB_NAME = getDatabaseName();
const DB_USER = getDatabaseUser();
const DB_PASSWORD = getDatabasePassword();

const mongooseOptions = {
  promiseLibrary:     global.Promise,
  poolSize:           10, // Maintain up to 10 socket connections
  keepAlive:          30000, // 30s
  connectTimeoutMS:   5000, // 5s
  useNewUrlParser:    true,
  useFindAndModify:   false,
  useCreateIndex:     true,
  useUnifiedTopology: true,
};

export const mongo = {
  async connect() {
    return mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, mongooseOptions);
  },
  async disconnect() {
    return mongoose.disconnect();
  },
};

mongo.connect()
  .then(() => {
    const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}/?authSource=admin`;
    debug(`DB '${URL}' connected`);
  })
  .catch(({ message }) => {
    debug(`DB '${DB_NAME}' connection error: ${message}`);
  });
