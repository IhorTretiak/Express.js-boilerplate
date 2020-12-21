// Core
import request from 'supertest';
// Instruments
import { app } from 'server';


describe('Init', () => {
  describe('GET endpoints', () => {
    it('GET "/api/v1" should return html', async (done) => {
      const response = await request(app).get('/api/v1');

      expect(response.status).toBe(200);
      expect(response.text).toBe('<h1>Hello from API =)</h1>');
      done();
    });
  });
});
