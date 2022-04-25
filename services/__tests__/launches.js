const {getRandomPicturesFromLaunches} = require('../launches.service');

describe('Test index controller', () => {
  it('return random picture from launches array', async () => {
    const picLink = await getRandomPicturesFromLaunches(require('../../test/mock.json'))
    console.log(picLink)
    expect(picLink).toBeDefined();
  });

  it('Throws error if empty arr', async () => {
    try {
      const picLink = await getRandomPicturesFromLaunches([])
    } catch (e) {
      expect(e.statusCode).toBe(404);
    }
  });

  it('Throws error if no images were found', async () => {
    try {
      const picLink = await getRandomPicturesFromLaunches({
        "links": {
          "flickr": {"small": [], "original": []}
        }
      })
    } catch (e) {
      expect(e.statusCode).toBe(404);
    }
  });
});
