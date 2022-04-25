const request = require('../../test/main');

describe('Main route', () => {
  it('Redirects to the image link', async () => {
    const response = await request.get('/');
    console.log(response)

    expect(response.status).toBe(302);
    expect(response.header.location).toBeDefined();
  });
});
