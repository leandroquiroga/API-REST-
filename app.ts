import dotenv from 'dotenv';
dotenv.config();

import server from './server/server';
import environment from './configuration';
import { logger } from './utilities';



server.listen(environment.PORT, () => {
  (environment.PORT)
    ? logger.info(`Server running on http://${environment.URI}:${environment.PORT}/v1/api`)
    : logger.error('Server failded, please contact with administrator')
});