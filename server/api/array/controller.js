const service = require("./service");

var sort = (req,res) => {
  let recivedArray = req.body.array;
  if (!recivedArray || recivedArray.length===0)
    res.status(400).send("Please add data");
  else if (recivedArray.length > 1000)
    res.status(400).send("Array length must be smaller than 100")
  else
    service.sort(recivedArray,(err,result)=>{  
      res.json({
        success:1,
        message:"OK",
        sortedArray:result
      });
    });
};

module.exports = {
  sort: sort
};