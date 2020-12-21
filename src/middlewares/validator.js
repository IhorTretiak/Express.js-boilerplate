// Core
import Ajv from 'ajv';


const normalizeError = ({ dataPath, params, message }) => {
  const error = {};
  const [paramValue] = Object.values(params);

  if (dataPath) {
    error[dataPath.slice(1)] = message;
  } else {
    error[paramValue] = message;
  }

  return error;
};

// eslint-disable-next-line consistent-return
export const validator = (schema) => (req, res, next) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const valid = validate(req.body);

  if (valid) {
    return next();
  }

  const errors = validate.errors.map(
    ({ message, params, dataPath }) => normalizeError({ dataPath, message, params }),
  );

  res.status(400).json({ message: 'Validation error', errors });
};
