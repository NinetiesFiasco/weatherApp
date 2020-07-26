const request = require('request');
const service = require("./service");

const weatherByCity = (req,res) => {
  
  const city = req.query.city;

  if (!city || city === "")
    res.status(400).send("Укажите город");
  else  
    service.weather(city,(error,result)=>{
      if (error)
        res.json({
          success: 0,
          message: "error",
          error: error
        });
      else
        res.json({
          success:1,
          message: "OK",
          body: result
        });
    });
};


const test = (req,res) => {
  return res.json({
    success: 1,
    message: "OK",
    body: require('./example.js')
  });
};

module.exports = {
  weatherByCity: weatherByCity,
  test: test
};