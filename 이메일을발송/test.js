//https://nodemailer.com/about/
const nodemailder = require("nodemailer");

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f3d5e7c9058093",
        pass: "61bc757cbb04c5"
    }
};

const send = async (option) => {
    nodemailder
        .createTransport(email)
        .sendMail(
            option,
            (error, info) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log(info);
                    return info.response;
                }
            }
        );
    };

let data = {
    from: "escatrgot@gmail.com",
    to: "escatrgot@gmail.com",
    subject : "테스트 메일 입니다.", 
    text : 'nodejs 테스트 메일입니다.'
};

send(data)