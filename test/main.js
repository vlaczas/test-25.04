const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

afterAll(() => server.close());

module.exports = request;
