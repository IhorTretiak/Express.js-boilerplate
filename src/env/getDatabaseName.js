import { EnvValidation } from './validation';


export const getDatabaseName = () => {
  const { MONGO_DB_DATABASE } = process.env;
  const validation = new EnvValidation('MONGO_DB_DATABASE', MONGO_DB_DATABASE);
  validation.required();
  validation.string();

  return MONGO_DB_DATABASE;
};
