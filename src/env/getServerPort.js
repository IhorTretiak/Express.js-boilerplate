import { EnvValidation } from './validation';


export const getServerPort = () => {
  const { PORT } = process.env;
  const validation = new EnvValidation('PORT', PORT);
  validation.required();
  validation.serverPort();

  return Number(PORT);
};
