import { EnvValidation } from './validation';


export const getRedisPort = () => {
  const { REDIS_DB_PORT } = process.env;
  const validation = new EnvValidation('REDIS_DB_PORT', REDIS_DB_PORT);
  validation.required();
  validation.redisPort();

  return REDIS_DB_PORT;
};
