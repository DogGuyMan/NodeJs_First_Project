const express = require('express');
const app = express();

/*/*
    라우팅이란?
    URL, HTTP 메소드등 엔드포인트에 대해
    클서 요청-응답 방식을 의미한다.

    클request에 대해 서response할떄
        서버의 어떤 기능으로 response할지 결정하는것

    express에서는 다음과 같다
        app._METHOD_(PATH : 경로, HANDLER : _실행하고싶은 함수 콜백방식으로 작동_)
            즉, 
                경로 A에 대해서는
                    HANDER_A를 실행하도록,
                경로 B에 대해서는
                    HANDER_B를 실행하도록
            할 수 있다.

            혹시 핸들러 콜백함수는 html 불러오게끔 하는것도 가능한가?
                경로 C에 대해서는
                    HANDLER_C 즉, HTML 불러오는것
                    가능하다!
*/

//___포드에서 listen하는 서버 구동하기
const server = app.listen(3000, ()=>{
    console.log("Start Server : localHost:3000");
})

app.get(
    '/', //경로
    function (req, res){ //콜백함수
        res.send("Hello World");
    }
);

app.get(
    '/about', //경로
    function (req, res){ //콜백함수
        res.send("about page");
    }
);

/*
혹시 핸들러 콜백함수는 html 불러오게끔 하는것도 가능한가?
    경로 C에 대해서는
        HANDLER_C 즉, HTML 불러오는것
        가능하다!

단, set을 설정해야한다.

*/ 

//__dirname?
app.set('views', __dirname + '/views');

//ejs? 
//  npm install ejs
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get(
    '/mypage',
    function(req,res){
        res.render('index.html');
    }
);