var express = require('express');
var bodyparser = require("body-parser");
var app = express();
var fs = require('fs');

app.use(express.static('test'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.post('/abc', function (req, res) {
  res.send('Hello World!');
//  console.log(req.body.name );
//  console.log(JSON.stringify(req.body));
  //console.log(req.body.test);
// console.log(req.body.nameofid);
//  fs.writeFile(req.body.name,req.body.test);
console.log(req.body.jsondata);
//console.log(req.body.left, req.body.top);
 fs.writeFile("test/index.json", req.body.jsondata);
});

app.post('/fgh',function(req, res){
  var Datatosave = req.body.imgdata.replace(/^data:image\/png;base64,/, "");
  fs.writeFile(req.body.nameofimgfile,Datatosave,'base64');
});

app.get('/def',function(req,res){
  res.send('you got it');
});

app.listen(3000, function () {
   console.log('express server is on port 3000');
});
