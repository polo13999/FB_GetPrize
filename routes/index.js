var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
//router.get('/', function (req, res, next) {
//res.render('index', { title: 'Express' });
var access_token = "";
request(`https://graph.facebook.com/v2.8/1782686801973742_1865749533667468/comments?limit=100&access_token=${access_token}`, 'utf-8', function (res, rep, data) {
  var data1 = JSON.parse(data);

  for (i = 0; i < 1; i++) {
    let prize_id = Math.random() * (data1.data.length - 1);
    let win_id = data1.data[Math.ceil(prize_id)];
    console.log(win_id.from.name);
  }



  //console.log(data1);
  //console.log(data);
})

//});

module.exports = router;
