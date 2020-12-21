// Core
import bodyParser from 'body-parser';


export const jsonParser = (limit = '10kb') => bodyParser.json({ limit });
export const urlencodedParser = () => bodyParser.urlencoded({ extended: false });

