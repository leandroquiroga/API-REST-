import dotenv from 'dotenv';
dotenv.config();

import server from './server/server';
import environment from './configuration';



server.listen(environment.PORT, () => {
  (environment.PORT)
    ? console.info(`Server running on http://${environment.URI}:${environment.PORT}/v1/api`)
    : console.error('Server failded, please contact with administrator')
});