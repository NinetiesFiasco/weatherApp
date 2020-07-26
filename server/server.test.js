const request = require("supertest");
 
var app = require("./server").app;
 
it("should return Hello Test", function(done){
     
    request(app)
        .get("/")
        .expect("Hello Test")
        .end(done);
});


describe(" GET /api/now ",()=>{
  it("should return date", (done)=>{ 
    request(app)
      .get("/api/now")
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      .end((err,res)=>{
        if (err)return dane(err);
        if (res.body.success===1)
          return done();
        else
          return done('Error');
      })
  })
})

describe(" POST /api/sort ",()=>{
  it("should return sorted array",(done)=>{
    request(app)
      .post("/api/sort")
      .send({array: [10,5,15]})
      .expect(200,{
        success: 1,
        message: 'OK',
        sortedArray: [5,10,15]
      })
      .end(done);
  })
})

describe("GET /api/weather?city=Shchelkovo",()=>{
  it("should retrun weather data", (done)=>{
    request(app)
      .get('/api/weather?city=Shchelkovo')
      .expect(200)
      .end((err,res)=>{
        if (err) done(err);
        if (res.body.success===1)
          return done();
        else
          return done('error');
      })
  })
})