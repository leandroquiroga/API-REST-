import { Environmnet } from "../interfaces";

const environment: Environmnet = {
  PORT: process.env.PORT || '8081',
  URI: process.env.URI || '',
  MONGO_URI: process.env.MONGO_URI || '',
};

export default environment;