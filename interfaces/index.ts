export interface Environmnet {
  PORT: string;
  URI: string;
  MONGO_URI: string;
}
 
export interface User {
  name: string;
  lastname: string;
  age: number;
  email: string;
  username: string;
}

export interface UserResponse {
  name: string;
  lastname: string;
  age: number;
  email: string;
  username: string;
  id: string;
}