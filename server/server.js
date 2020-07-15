const express = require('express');

const app = express();

app.get('/api/tst', function (req, res) {
  res.json({
    success: 1,
    message: "Messaga from server"
  });
});

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'/build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname })
  });
}

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});