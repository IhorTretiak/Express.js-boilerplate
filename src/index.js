// Core
import dg from 'debug';
// Instruments
import { app } from './server';
import { getServerPort } from './env';
// Database
import './databases/mongo';


const SERVER_PORT = getServerPort();
const debug = dg('server:');

app.listen(SERVER_PORT, () => {
  debug(`Server is running on port http://localhost:${SERVER_PORT}`);
});
