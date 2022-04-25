const express = require('express');
const logger = require('morgan');

const helmet = require('helmet');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const indexRouter = require('./routes/index');
const CustomError = require('./errors/customError');
const mainErrorHander = require('./errors/error-handler');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200, // Limit each IP to 200 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);
app.use(helmet());
app.use(hpp({}));
app.use(logger('dev'));

app.use('/', indexRouter);
app.use((req, res, next) => next(new CustomError('Not Found', 404)));

app.use(mainErrorHander);

module.exports = app;
