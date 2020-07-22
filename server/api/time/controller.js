const service = require("./service");

const now = (req,res) => {
  service.now((err,result)=>{
    return res.json({
      success: 1,
      message: "OK",
      now: result
    });
  });
};

module.exports = {
  now: now
};