var express = require('express');
var app = express();

app.get('/time', function (req, res) {
  res.json({
    result: 'success',
    data: new Date()
  });
});

// Express global error handler
app.use(function (err, req, res, next) {
  console.error(err.toString());
  res.status(503).json(
    {
      result: 'error',
      message: err.toString()
    }
  );
});

app.listen(3000);
