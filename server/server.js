const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const weatherAPIKey = "9d74f0b698218875eb5fecff78941eb6";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', require('./api/router.js'));

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'/build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname })
  });
}

app.get('/',(req,res)=>{
  res.send("Hello Test")
})

if(!module.parent){
  app.listen(5000, () =>
    console.log(`Weather app listening on port ${5000}!`),
  );
}

module.exports.app = app;
