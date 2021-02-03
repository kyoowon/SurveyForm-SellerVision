//document.write("<script type='text/javascript' src='../template/page.js'><"+"/script>"); 
// import {total_list} from '../template/page.js';

console.log(total_list);
dbconfig = require('./config/database_survey');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!


dbconn.connect(function (err) {
    if (!err) {
        console.log("Database is connected!");
    } else {
        console.log("Error connecting database...nn :" + err);
    }
})
var sql2 = "SELECT * FROM survey_re";


dbconn.query(sql2, function (error, rows, fields) {
    if (error) {
        console.log(error);
    } else {
        console.log('rows', rows);
        //console.log('fields',fields);
    }
});
dbconn.end();
function database_insert(list) {
    var dbconfig = require('./config/database_survey.js');
    var mysql = require('mysql');
    var dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!
    var sql = "INSERT INTO servey_re * VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    var params = list;
    dbconn.connect(function (err) {
        if (!err) {
            console.log("Database is connected!");
        } else {
            console.log("Error connecting database...nn :" + err);
        }


        dbconn.query(sql, params, function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log('rows', rows);
                //console.log('fields',fields);
            }
        });
        var sql2 = "SELECT * FROM servey_result";

        dbconn.query(sql2, function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                console.log('rows', rows);
                //console.log('fields',fields);
            }
        });
        dbconn.end();
    });
}
