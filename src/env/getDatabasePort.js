import { EnvValidation } from './validation';


export const getDatabasePort = () => {
  const { MONGO_DB_PORT } = process.env;
  const validation = new EnvValidation('MONGO_DB_PORT', MONGO_DB_PORT);
  validation.required();
  validation.databasePort();

  return MONGO_DB_PORT;
};
