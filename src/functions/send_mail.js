var nodemailer = require('nodemailer')
var mg = require('nodemailer-mailgun-transport')

require('dotenv').config()

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 405, body: 'Method Not Allowed' })
  }

  var auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  }

  const params = JSON.parse(event.body)
  const name = params.name
  const email = params.email
  const message = params.message
  const privacyConcent = params.hasConfirmedPrivacy
    ? 'Afegirem la teva adreça de correu a la nostra llista de distribució per enviar-te informació del programa i la campanya'
    : ''

  var mailOptions = {
    from: '"CUP de Vilanova" vilanova@cup.cat',
    subject: `Moltes gràcies ${name} per la proposta`,
    html: `<div><h5>Hem rebut aquesta proposta a través del web www.estemapuntvng.cat</h5><p>Moltes gràcies ${name} per la teva participació. Tindrem en compte la teva aportació a l'hora d'elaborar el programa</p>Proposta: ${message}</p><p>${privacyConcent}</p></div>`,
    to: `"${name}" ${email}`,
    bbc: 'oriol.castroarnau@gmail.com',
  }

  var transporter = nodemailer.createTransport(mg(auth))

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
