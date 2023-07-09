const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const subject = "Nodemailer"
const message =  "Seat reservation succesful"
dotenv.config()

const mailTransport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
  }
});

const sendMail = (userEmail) => mailTransport.sendMail(
  {from: process.env.EMAIL_ADDRESS,
  to: userEmail,
  subject: subject,
  text: message},
  (error, info) =>{
  if (error) {
    console.log(error);
  } 
  else {
    console.log('Email sent: ' + info.response);
  }
}); 

module.exports = {sendMail}