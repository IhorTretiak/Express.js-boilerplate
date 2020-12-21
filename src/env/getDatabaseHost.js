import { EnvValidation } from './validation';


export const getDatabaseHost = () => {
  const { MONGO_DB_HOST } = process.env;
  const validation = new EnvValidation('MONGO_DB_HOST', MONGO_DB_HOST);
  validation.required();
  validation.string();

  return MONGO_DB_HOST;
};
