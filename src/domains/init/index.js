// Core
import { Router } from 'express';
// Middlewares
import { cache } from 'middlewares';
// Handlers
import * as init from './router.handlers';


const route = Router();

route.get('/', init.get);
route.get('/repos/:username', [cache('username')], init.getReposNumber);

export { route as init };
