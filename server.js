const app = require('./app');

const server = app.listen(3000, () => {
  console.log('Server started at port 3000');
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close((err) => {
    console.log('Http server closed.');
    process.exit(err ? 1 : 0);
  });
});

module.exports = server;
