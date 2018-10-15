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
  const subscribeCampaignInfo = params.subscribeCampaignInfo
    ? '<li>Afegirem la teva adreça de correu a la nostra llista de distribució per enviar-te informació del programa i la campanya electoral.</li>'
    : ''
  const subscribeGeneralInfo = params.subscribeGeneralInfo
    ? '<li>Afegirem la teva adreça de correu a la nostra llista de distribució per enviar-te informació de les activitats, trobades i campanyes de la CUP de Vilanova.</li>'
    : ''

  var mailOptions = {
    from: '"CUP Vilanova i la Geltrú" <contacte@estemapuntvng.cat>',
    subject: `Moltes gràcies ${name} per la proposta`,
    html: `<div><p>Moltes gràcies ${name} per la teva participació!</p><p>Hem rebut la teva proposta a través del web www.estemapuntvng.cat. La tindrem en compte a l'hora d'elaborar el programa.</p><p style="font-weight:bold">Proposta:</p><p style="font-style:italic">${message}</p><p>Informació de privacitat:<p><ul>${subscribeCampaignInfo}${subscribeGeneralInfo}</ul></div>`,
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
        body: 'success',
      })
    }
  })
}
