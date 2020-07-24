const request = require('request');
const weatherAPIKey = "9d74f0b698218875eb5fecff78941eb6";

const weather = (city,callBack) => {
  
  request("http://api.openweathermap.org/data/2.5/weather?q="+encodeURI(city)+"&appid="+weatherAPIKey,(error,response,body)=>{
      
      if(response.statusCode === 200){
        callBack(null,JSON.parse(body));
      } else {
        callBack("Weather error");
      }

    });
};

module.exports = {
  weather: weather
};