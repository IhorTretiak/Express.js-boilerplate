import { EnvValidation } from './validation';


export const getRedisHost = () => {
  const { REDIS_DB_HOST } = process.env;
  const validation = new EnvValidation('REDIS_DB_HOST', REDIS_DB_HOST);
  validation.required();
  validation.string();

  return REDIS_DB_HOST;
};
