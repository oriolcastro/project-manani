import querystring from 'querystring'
import nodemailer from 'nodemailer'
import mg from 'nodemailer-mailgun-transport'
require('dotenv').config()

exports.handler = async (event, context) => {
  // if (event.httpMethod !== 'POST') {
  //   return { statusCode: 405, body: 'Method Not Allowed' }
  // }

  var auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth))

  const params = querystring.parse(event.body)
  const name = params.name || 'Test'
  const email = params.email || 'test@test.com'
  const message = params.message || 'This is a test'

  console.log(name, email, message)

  return nodemailerMailgun.sendMail(
    {
      from: 'myemail@example.com',
      to: { email },
      subject: 'Hey you, awesome!',
      'h:Reply-To': 'reply2this@company.com',
      //       //You can use "html:" to send HTML email content. It's magic!
      html: `<div><h3>Message from ${name}</h3><b>${message}</b></div>`,
      //       //You can use "text:" to send plain-text content. It's oldschool!
      text: 'Hola!',
    },
    error => {
      if (error) {
        console.log('Error')
        return {
          statusCode: 500,
          body: SON.stringify({ error: error.message }),
        }
      } else {
        console.log('Email delivered')
        return {
          statusCode: 200,
          body: 'email_delivered',
        }
      }
      r
    }
  )
}
