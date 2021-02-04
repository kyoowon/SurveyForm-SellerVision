// s = require('express');
// const app = express();
// const session = require('express-session');
// var fs = require('fs');


// app.use(session({const expres
//     secret: 'AKSOE@#@@@$@ALFJW', //secret key 생성하고 싶은 문자열 넣음
//     resave: false, //request 시 다시 저장할지, true-세션에 수정사항 없어도 다시 저장됨
//     saveUninitialized: false, //세션에 저장할 내용이 없더라도 저장할건지
//     cookie: {
//         secure: false,
//         maxAge: 1000 * 60 * 60 //쿠키 유효기간 1시간
//     }

// }));

// const server = app.listen(3000, () => {
//     console.log('Server started. port 3000.');
// });

// const db = {
//     database: "survey",
//     connectionLimit: 10,
//     host     : 'localhost',
//     user     : 'root',
//     password : 'ekdms57661!',
// };

// app.get('/', function(req, res){
//     fs.readFile('./template/title.html', function(error, data){
//         if(error){
//             console.log(error);
//         }else{
//             res.writeHead(200, {'Content-Type':'html'});
//             res.end(data);
//         }
//     });
// });

// // app.use(express.static('../template/title.html'));

// const dbPool = require('mysql').createPool(db);

// app.post('/api/login', async (request, res) => {
//     request.session['email'] = 'qor_4@naver.com'; //임의로 메일 넣어둠
//     res.send('ok'); //로그인 되면 ok
// });
// app.post('/api/logout', async (request, res) => {
//     request.session.destroy(); //세션 파괴
//     res.send('ok') //로그아웃되면 ok
// });
// const sql = require('./sql.js');

// app.post('/api/:alias', async (request, res) => {
//     if(!request.session.email){ //로그인 안했으면 에러메세지
//         return res.status(401).send({error:'You need to login.'});
//     }
//     try {
//         res.send(await req.db(request.params.alias));
//     } catch(err) {
//         res.status(500).send({
//             error: err
//         });
//     }
// });

// const req = {
//     async db(alias, param = [], where = '') {
//         return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, parm, (error, rows) => {
//             if (error) {
//                 if (error.code != 'ER_DUP_ENTRY')
//                     console.log(error);
//                 resolve({
//                     error
//                 });
//             } else resolve(rows);
//         }));
//     }
// }; 
    


