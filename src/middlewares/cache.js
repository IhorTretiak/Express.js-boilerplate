// Instruments
import { redisClient } from 'databases/redis';


export const cache = (redisKey) => (req, res, next) => {
  const cacheKey = req.params[redisKey] ? req.params[redisKey] : redisKey;
  // eslint-disable-next-line consistent-return
  redisClient.get(cacheKey, (error, cacheData) => {
    if (error) {
      return next(error);
    }
    if (cacheData !== null) {
      const data = JSON.parse(cacheData);
      res.status(200).send(data);
    } else {
      next();
    }
  });
};
