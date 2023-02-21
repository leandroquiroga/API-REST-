import dotenv from 'dotenv';
dotenv.config()

import environment from './configuration';
import server from './server/server';
import { logger } from './utilities/logger';

server.listen(environment.PORT, () => {
  (environment.PORT)
    ? logger.info(`Server running on http://${environment.URI}:${environment.PORT}/v1/api`)
    : logger.error('Server failded, please contact with administrator')
});