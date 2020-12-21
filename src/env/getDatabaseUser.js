import { EnvValidation } from './validation';


export const getDatabaseUser = () => {
  const { MONGO_DB_ROOT_USERNAME } = process.env;
  const validation = new EnvValidation('MONGO_DB_ROOT_USERNAME', MONGO_DB_ROOT_USERNAME);
  validation.required();
  validation.string();

  return MONGO_DB_ROOT_USERNAME;
};
