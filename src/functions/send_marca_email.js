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
    host: 'api.eu.mailgun.net',
  }

  const params = JSON.parse(event.body)
  const name = params.name
  const email = params.email
  const marca = params.marca
  const subscribeCampaignInfo = params.subscribeCampaignInfo
    ? '<li>Afegirem la teva adreça de correu a la nostra llista de distribució per enviar-te informació del programa i la campanya electoral.</li>'
    : ''
  const subscribeGeneralInfo = params.subscribeGeneralInfo
    ? '<li>Afegirem la teva adreça de correu a la nostra llista de distribució per enviar-te informació de les activitats, trobades i campanyes de la CUP de Vilanova.</li>'
    : ''

  var mailOptions = {
    from: '"CUP Vilanova i la Geltrú" <contacte@estemapuntvng.cat>',
    replyTo: 'cupdevilanova@gmail.com',
    to: `"${name}" ${email}`,
    bcc: 'cupdevilanova@gmail.com',
    subject: `Proposta de nom rebuda correctament`,
    html: `<div>
    <p>Moltes gràcies ${name} per la teva participació!</p>
    <p>Hem rebut les teves propostes a través del web www.estemapuntvng.cat.</p>
    <p>Les teves propostes per al nom de la candidatura són: </p>
    <p>${marca}</p>
    <p>Ens veiem a l'Assemblea dissabte 26 de gener.</p>
    <p>Informació de privacitat:</p>
    <ul>${subscribeCampaignInfo}${subscribeGeneralInfo}</ul>
    </div>`,
  }

  var transporter = nodemailer.createTransport(mg(auth))

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log('Error sending mail')
      callback(err)
    } else {
      console.log('Email sent successfully')
      console.log(mailOptions)
      console.log(info)
      callback(null, {
        statusCode: 200,
        body: 'success',
      })
    }
  })
}
