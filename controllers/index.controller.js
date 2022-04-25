const axios = require('axios');
const CustomError = require('../errors/customError');

class IndexController {
  static async getPicture(req, res, next) {
    try {
      const response = await axios.get('https://api.spacexdata.com/v5/launches');
      const { data: launches } = response;
      if (!launches.length) throw new CustomError('Currently we don\'t have pictures for you', 404);

      // generate random link
      res.redirect();
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = IndexController;
