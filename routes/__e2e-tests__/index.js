const request = require('../../test/main');

describe('Route test', () => {
  it('test', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
  });
});
