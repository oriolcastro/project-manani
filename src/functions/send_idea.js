import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'
import querystring from 'querystring'

require('dotenv').config()

var auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth))

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  const params = querystring.parse(event.body)
  console.log(params)
  const email = params.email
  const name = params.name
  const message = params.message
  console.log(email)
  return {
    statusCode: 200,
    body: `Email sended to ${email}`,
  }
  // nodemailerMailgun
  //   .sendMail(
  //     {
  //       from: 'myemail@example.com',
  //       to: { email },
  //       subject: 'Hey you, awesome!',
  //       'h:Reply-To': 'reply2this@company.com',
  //       //You can use "html:" to send HTML email content. It's magic!
  //       html: `<div><h3>Message from ${name}</h3><b>${message}</b></div>`,
  //       //You can use "text:" to send plain-text content. It's oldschool!
  //       text: 'Hola!',
  //     },
  //     error => {
  //       if (error) {
  //         const response = {
  //           statusCode: 500,
  //           body: JSON.stringify({
  //             error: error.message,
  //           }),
  //         }
  //       }
  //       const response = {
  //         statusCode: 200,
  //         body: `email_delivered`,
  //       }
  //     }
  //   )
  //   .then(response => callback(null, response))
}

//Afegir gestió de dotenv per credencials mailgun
//Afegir package nodemailer per enviar els correus
//Afegir status return per mostrar succes message al client
