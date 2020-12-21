// Core
import { createClient } from 'redis';
import dg from 'debug';
// Helpers
import { getRedisPassword, getRedisHost, getRedisPort } from 'env';


const debug = dg('db:');
const REDIS_PASSWORD = getRedisPassword();
const REDIS_HOST = getRedisHost();
const REDIS_PORT = getRedisPort();

export const redisClient = createClient({
  host:     REDIS_HOST,
  port:     REDIS_PORT,
  password: REDIS_PASSWORD,
});

redisClient.on('connect', () => {
  const URL = `${REDIS_HOST}:${REDIS_PORT}`;
  debug(`DB '${URL}' connected`);
});

redisClient.on('error', ({ message }) => {
  debug(`DB 'Redis' connection error: ${message}`);
});
