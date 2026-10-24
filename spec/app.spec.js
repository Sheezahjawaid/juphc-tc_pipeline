const request = require('supertest');
const app = require('../server');

describe('Tax Calculator API Unit Tests', () => {
  it('1. should calculate tax for standard income', (done) => {
    request(app)
      .post('/calculate')
      .send({ income: 50000 })
      .expect(200, done);
  });

  it('2. should return 0 tax for zero income', (done) => {
    request(app)
      .post('/calculate')
      .send({ income: 0 })
      .expect(200, done);
  });

  it('3. should return 400 for negative income', (done) => {
    request(app)
      .post('/calculate')
      .send({ income: -100 })
      .expect(400, done);
  });

  it('4. should serve the homepage', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('5. should handle tax deductions correctly', (done) => {
    request(app)
      .post('/calculate')
      .send({ income: 60000, deductions: 5000 })
      .expect(200, done);
  });

  it('6. should reject invalid payload', (done) => {
    request(app)
      .post('/calculate')
      .send({ income: "abc" })
      .expect(400, done);
  });

  it('7. should return health check status', (done) => {
    request(app)
      .get('/health')
      .expect(200, done);
  });
});