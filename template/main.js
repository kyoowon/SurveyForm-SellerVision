var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var report = require('./report')
var dbconfig = require('./database_survey');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig);
var params = new Array();

var app = http.createServer(function (request, response) {
  var url = request.url;
  if (request.url == "/report") {
    var body = "";
    var name = "";
    var email = "";
    var etc = "";
    var product = "";
    request.on('data', function (data) {
      body = body + data;
    }
    );
    request.on('end', function () {
      var post = qs.parse(body);
      name = post.name;
      email = post.email;
      etc = post.etc;
      product = post.product;
      params = [name, product, etc, email];
      answer = [product];

      for (i in post.total) {
        answer.push(post.total[i])
      }
      var sql = "INSERT INTO survey_form (name, product, etc, email) VALUES (?,?,?,?)";
      dbconn.query(sql, params, function (error, rows) {
        if (error)
          console.log(error);
        else 
          console.log(rows);
      });
      var answer_sql = "INSERT INTO survey_re (product, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q12, Q13, Q14, Q15) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?)";
      dbconn.query(answer_sql, answer, function (error, rows) {
        if (error)
          console.log(error);
        else
          console.log(rows);
      });
      var Q10_sql = "INSERT INTO survey_mul10 (product, Q10) VALUES (?,?)";
      for (i in post.Q10) {
        dbconn.query(Q10_sql, [product, post.Q10[i]], function (error, rows) {
          if (error)
            console.log(error);
          else
            console.log(rows);
        });
      }
      var Q11_sql = "INSERT INTO survey_mul11 (product, Q11) VALUES (?,?)";
      for (i in post.Q11) {
        dbconn.query(Q11_sql, [product, post.Q11[i]], function (error, rows) {
          if (error)
            console.log(error);
          else
            console.log(rows);
        });
      }
      var html = report.HTML(params, answer, post.Q10, post.Q11);
      response.writeHead(200);
      response.end(html);
    })
  }
  else {
    if (request.url == '/favicon.ico') {
      return response.writeHead(404);
    }
    else if (request.url == '/') {
      url = '/title.html';
    }
    console.log("check" + __dirname + url)
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
  }
});
app.listen(3000);

// dbconn.end();
