// Core
import { Router } from 'express';
// Instruments
import { init } from './domains';


const router = Router();

router.use('/', init);

export { router };
