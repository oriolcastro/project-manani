var nodemailer = require('nodemailer')
var mg = require('nodemailer-mailgun-transport')

require('dotenv').config()

exports.handler = function(event, context, callback) {
  // if (event.httpMethod !== 'POST') {
  //   return { statusCode: 405, body: 'Method Not Allowed' }
  // }

  var auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  }

  var mailOptions = {
    from: 'test@test.com',
    subject: 'Test subject',
    html: `<div><h3>Message from ${event.body.name}</h3><b>${
      event.body.message
    }</b></div>`,
    to: 'uri875@gmail.com',
  }

  var transporter = nodemailer.createTransport(mg(auth))

  const params = event.body
  console.log(params)
  const name = params.name
  const email = params.email
  const message = params.message
  console.log(params.name)

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log('Error sending mail')
      callback(err)
    } else {
      console.log('Email sent successfully')
      callback(null, {
        statusCode: 200,
        body: 'sucess',
      })
    }
  })
}
