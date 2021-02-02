document.write("<script type='text/javascript' src='../template/page.js'><"+"/script>"); 

var dbconfig = require('../db/config/database_survey.js');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!

var sql = "INSERT INTO servey_result VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
var params = [];

function database_insert(){
    dbconn.connect(function(err){
        if(!err) {
            console.log("Database is connected!");
        } else {
            console.log("Error connecting database...nn :" + err);
        }
    
        //var sql = "SELECT _id, phone FROM test LIMIT 2";
    
        dbconn.query(sql, params, function(error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                console.log('rows',rows);
                //console.log('fields',fields);
            }
        });
        var sql2 = "SELECT * FROM test";
    
        dbconn.query(sql2, function(error, rows, fields){
            if(error) {
                console.log(error);
            } else {
                console.log('rows',rows);
                //console.log('fields',fields);
            }
        });
        dbconn.end();
    });
}



