// Core
import { createTerminus } from '@godaddy/terminus';
import dg from 'debug';
// Databases
import { mongo } from 'databases/mongo';
import { redisClient } from 'databases/redis';


const debug = dg('server:terminus');

const getOptions = (server) => ({
  signal: 'SIGINT',
  onSignal() {
    debug('server is starting cleanup');

    return Promise.all([
      server.close(),
      mongo.disconnect(),
      redisClient.quit(),
    ]);
  },
  onShutdown() {
    debug('cleanup finished, server is shutting down');
  },
});

export const makeTerminus = (server) => {
  const options = getOptions(server);

  return createTerminus(server, options);
};
