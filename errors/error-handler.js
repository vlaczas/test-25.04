// eslint-disable-next-line no-unused-vars
function mainErrorHandler(err, req, res, next) {
  const { statusCode, message } = err;
  if (err.statusCode) {
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'The service is temporarily unavailable, please try again later' });
}

module.exports = mainErrorHandler;
