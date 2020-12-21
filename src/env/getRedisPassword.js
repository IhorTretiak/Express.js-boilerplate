import { EnvValidation } from './validation';


export const getRedisPassword = () => {
  const { REDIS_DB_ROOT_PASSWORD } = process.env;
  const validation = new EnvValidation('REDIS_DB_ROOT_PASSWORD', REDIS_DB_ROOT_PASSWORD);
  validation.required();
  validation.string();

  return REDIS_DB_ROOT_PASSWORD;
};
