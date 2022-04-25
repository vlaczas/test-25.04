const delay = require('../utils/delay');

class LaunchesService {
  static async getRandomPicturesFromLaunches(launches) {
    const numOfCycles = Math.ceil(launches.length / 100);
    const flickrImagesLinks = [];
    for (let i = 0; i < numOfCycles; i += 1) {
      const arr = launches.slice(i * 100, 100 + (i * 100));

      // to avoid too big arrays decided to split loops with a delay to make it async
      await delay(150);
      flickrImagesLinks.push(...arr.reduce((acc, launch) => {
        if (launch.links.flickr.original[0]) return [...acc, ...launch.links.flickr.original];
        return acc;
      }, []));
    }

    // generate random link
    return flickrImagesLinks[Math.floor(Math.random() * flickrImagesLinks.length)];
  }
}

module.exports = LaunchesService;
