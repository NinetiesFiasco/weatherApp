
app.get('/api/now', function (req, res) {
  res.json({
    success: 1,
    message: "OK",
    now: new Date()
  });
});

app.post('/api/sort',(req,res)=>{
  let array = req.body.array.sort((a,b)=>a-b);
  
  if (array.length===0)
    res.status(400).send("Please add data");
  else if (array.length > 100)
    res.status(400).send("Array to big");
  else
    res.json({
      success:1,
      message:"OK",
      sortedArray:array
    });
});

app.get("/api/weather/test",(req,res)=>{
  if (!req.query.city || req.query.city != "Щёлково")
    res.json({
      success:0,
      message: "OK",
      error: "Da Error"
    });
  else
  res.json({
    success: 1,
    message: "OK",
    body: {
      coord: {
        lon: 37.99,
        lat: 55.92
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      base: 'stations',
      main: {
        temp: 288.52,
        feels_like: 286.15,
        temp_min: 288.15,
        temp_max: 289.26,
        pressure: 1006,
        humidity: 77
      },
      visibility: 10000,
      wind: {
        speed: 4,
        deg: 240
      },
      clouds: {
        all: 31
      },
      dt: 1595447074,
      sys: {
        type: 1,
        id: 9027,
        country: 'RU',
        sunrise: 1595380494,
        sunset: 1595440425
      },
      timezone: 10800,
      id: 495344,
      name: 'Shchelkovo',
      cod: 200
    }
  })
});

app.get("/api/weather",(req,res)=>{
  if(req.query.city && req.query.city != ""){
    request("http://api.openweathermap.org/data/2.5/weather?q="+encodeURI(req.query.city)+"&appid="+weatherAPIKey,(error,response,body)=>{
      
      if(response.statusCode === 200){
        res.json({
          success: 1,
          message:"OK",
          body:body
        });
      } else {
        res.json({
          success: 0,
          message:"Error",
          error: error
        });
      }

    });
  }
});
