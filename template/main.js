var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var dbconfig = require('./database_survey');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig);
var params = new Array();

var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == '/') {
    url = '/title.html';
  }
  else if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  }
  else if (request.url == "/report") {
    url = '/report.html';
    var body = '';
    var name = "";
    var email ="";
    var etc = "";
    var product = "";
    request.on('data', function (data) { body = body + data; });
    request.on('end', function () {
      var post = qs.parse(body);
      name = post.name;
      email=post.email;
      etc=post.etc;
      product=post.product
      params =[name, product, etc, email];
      params2=[];
      for (i in post.total){
        params2.push(post.total[i])
      }
      var sql = "INSERT INTO survey_form (name, product, etc, email) VALUES (?,?,?,?)";
      dbconn.query(sql, params, function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
      var sql2 = "INSERT INTO survey_re (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q12, Q13,Q14,Q15) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
      dbconn.query(sql2, params2, function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
    })
    
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

// dbconn.end();
