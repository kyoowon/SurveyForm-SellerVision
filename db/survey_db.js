//document.write("<script type='text/javascript' src='../template/page.js'><"+"/script>"); 
// import {total_list} from '../template/page.js';

dbconfig = require('./config/database_survey');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!

// list = [
//     { q: 1, id: 1, value: "yes" },
//     { q: 2, id: 2, value: "yes" },
//     { q: 3, id: 2, value: "yes" },
//     { q: 4, id: 2, value: "yes" },
//     { q: 5, id: 1, value: "yes" },
//     { q: 6, id: 2, value: "yes" },
//     { q: 8, id: 3, value: "yes" },
//     { q: 7, id: 4, value: "yes" },
//     { q: 9, id: 1, value: "yes" },
//     { q: 12, id: 3, value: "yes" },
//     { q: 13, id: 2, value: "yes" },
//     { q: 14, id: 2, value: "yes" },
//     { q: 15, id: 1, value: "yes" },
// ];
console.log(total_list);

params =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i in list){
    params[(list[i].q)-1] = list[i].id;
}
params.splice(9, 2);
// params.splice(10);
console.log(params)
dbconn.connect(function (err) {
    if (!err) {
        console.log("Database is connected!");
    } else {
        console.log("Error connecting database...nn :" + err);
    }
})
var sql2 = "SELECT * FROM survey_re";

    var sql = "INSERT INTO survey_re (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q12, Q13,Q14,Q15) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    dbconn.query(sql, params, function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log('rows', rows);
            //console.log('fields',fields);
        }
    });


dbconn.query(sql2, function (error, rows, fields) {
    if (error) {
        console.log(error);
    } else {
        console.log('rows', rows);
        //console.log('fields',fields);
    }
});
dbconn.end();


// var dbconfig = require('./config/database_survey.js');
// var mysql = require('mysql');
// var dbconn = mysql.createConnection(dbconfig); //< DB Connection~!!
// var sql = "INSERT INTO servey_re * VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
// var params = list;
// dbconn.connect(function (err) {
//     if (!err) {
//         console.log("Database is connected!");
//     } else {
//         console.log("Error connecting database...nn :" + err);
//     }


//     dbconn.query(sql, params, function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('rows', rows);
//             //console.log('fields',fields);
//         }
//     });
//     var sql2 = "SELECT * FROM servey_result";

//     dbconn.query(sql2, function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('rows', rows);
//             //console.log('fields',fields);
//         }
//     });
//     dbconn.end();
// });
