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
      product=post.product;
      params =[name, product, etc, email];
      params_total=[product];

      for (i in post.total){
        params_total.push(post.total[i])
      }
      var sql = "INSERT INTO survey_form (name, product, etc, email) VALUES (?,?,?,?)";
      dbconn.query(sql, params, function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
      var sql_total = "INSERT INTO survey_re (product, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q12, Q13, Q14, Q15) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?)";
      dbconn.query(sql_total, params_total, function (error, rows) {
          if (error) {
              console.log(error);
          }
      });

      var sql_mult10 = "INSERT INTO survey_mul10 (product, Q10) VALUES (?,?)";
      for (i in post.Q10){
        dbconn.query(sql_mult10, [product, post.Q10[i]], function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
      }
      

      var sql_mult11 = "INSERT INTO survey_mul11 (product, Q11) VALUES (?,?)";
      for (i in post.Q11){
        dbconn.query(sql_mult11, [product, post.Q11[i]], function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
      }
      
    })
    
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

// dbconn.end();
