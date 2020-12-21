import { EnvValidation } from './validation';


export const getDatabasePassword = () => {
  const { MONGO_DB_ROOT_PASSWORD } = process.env;
  const validation = new EnvValidation('MONGO_DB_ROOT_PASSWORD', MONGO_DB_ROOT_PASSWORD);
  validation.required();
  validation.string();

  return MONGO_DB_ROOT_PASSWORD;
};
