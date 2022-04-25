function mainErrorHander(err, req, res) {
  console.log(err.message, err.code);
  res.send(err);
}

module.exports = mainErrorHander;
