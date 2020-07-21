const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/now', function (req, res) {
  res.json({
    success: 1,
    message: "Messaga from server",
    now: new Date()
  });
});

app.post('/api/sort',(req,res)=>{
  let array = req.body.array.sort((a,b)=>a-b);
  res.json({
    success:1,
    message:"OK",
    sortedArray:array
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