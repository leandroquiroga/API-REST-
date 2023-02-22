import request from 'supertest';
import server from '../../server/server';

import { connectDatabase, closeDatabase } from '../../mock/connectiondb.mock';
import mongoose, { isValidObjectId } from 'mongoose';
import { logger } from '../../utilities/logger';
import { payload } from '../../mock/payload.mock';

// Connection to a in-memory database before running any tests.
beforeAll(async () => {
  await connectDatabase();
});

// Remove and close the database and server
afterAll(async () => {
  await closeDatabase();
  await mongoose.connection.close();
  logger.info('Database disconnect');
});

describe('Test on controllers', () => {
  let id: string;
    
  it('should return an empty array users - GET ALL', async () => {
    const response = await request(server).get('/v1/api/users');

    expect(response.status).toEqual(200);
    expect(response.body.users.length).toEqual(0);
    expect(response.type).toEqual('application/json');
  });

  it('should create a user - POST', async () => {
    const response = await request(server).post('/v1/api/users').send(payload);
    expect(response.status).toEqual(201);    
    expect(isValidObjectId(response.body.user.id)).toEqual(true);
    // expect(response.body.user.length).toBeGreaterThan(0);
    expect(response.type).toEqual('application/json');
    expect(response.body.status).toEqual(true);

    // User id to make a get by id request
    id = response.body.user.id
  });

  it('should return an array users - GET ALL', async () => {
    const response = await request(server).get('/v1/api/users');

    expect(response.status).toEqual(200);
    expect(response.body.users.length).toBeGreaterThan(0);
    expect(response.body.status).toEqual(true);
    expect(response.type).toEqual('application/json');
  });

  it('should retun a user by id - GET BY ID', async () => {
    // id = '63f518b6edd0a1546999622e';
    const response = await request(server).get(`/v1/api/users/${id}`);
    expect(response.body.user).toEqual({ ...payload, id })
    expect(response.status).toEqual(200)
    expect(response.body.status).toEqual(true)
    expect(isValidObjectId(response.body.user.id)).toEqual(true);
    expect(response.body.user.email).toEqual(payload.email);
  });

  it('should update email and username a user by id - PUT', async () => {
    const response = await request(server).put(`/v1/api/users/${id}`).send({
      email: "juan@gmail.com",
      username: "juank"
  });
    expect(response.status).toEqual(200)
    expect(response.body).toEqual({ message: 'Se han actualizado su datos correctamente.' });
  });

});

