// Core
import cors from 'cors';


const whitelist = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isTestMode = process.env.NODE_ENV === 'test';

const options = {
  origin(origin, callback) {
    if (isDevelopmentMode || isTestMode) {
      callback(null, true);
    } else if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 204,
};

export const makeCors = () => cors(options);
