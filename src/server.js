// Core
import http from 'http';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import dg from 'debug';
// Instruments
import { router } from './router';
import { NotFoundError } from './errors';
import {
  makeCors, limiter, makeTerminus, swaggerUi, specs,
} from './middlewares';


const app = express();
const debug = dg('server:init');

app.use(helmet());
app.use(compression());
app.use(makeCors());
app.use(limiter);

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

// Route errors handling
app.use('*', (req, res, next) => {
  const error = new NotFoundError(`Route not found ${req.method} - '${req.originalUrl}'`);
  next(error);
});

// Express errors handling
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const { name, message, statusCode } = error;
  debug(`${name}: ${message}`);
  const status = statusCode || 500;
  res.status(status).json({ message });
});

// Async errors handling
process.on('unhandledRejection', async (error, promise) => {
  try {
    await promise;
  } catch ({ name, message }) {
    debug(`Unhandled rejection error: ${name} - ${message}`);
  }
});

// Sync errors handling
process.on('uncaughtException', ({ name, message }) => {
  debug(`Uncaught exception error: ${name} - ${message}`);
});

const server = http.createServer(app);
makeTerminus(server);

export { server as app };
