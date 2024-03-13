const express = require("express");

const app = express();

app.listen(3000, function () {
  console.log("PAI TA ON!");
});

app.use(function(req, res, next){
    console.log("Data", new Date())
    next()
})

app.get("/", function (req, res) {
  console.log(req.url);
  res.status(200).send("Voce fez uma requisição GET")
});

app.post("/", function (req, res){
    console.log(req.url)
    res.json({status: "201", message: "Voce fez uma requisiçao POST"})
})

app.put("/", function (){
    console.log("URL", req.url)
    res.status(201).send("Voce fez uma requisiçao PUT")
})



module.exports = app;
