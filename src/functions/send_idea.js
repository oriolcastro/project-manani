exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  return {
    statusCode: 200,
    body: 'Hello, World',
  }
}
//Afegir gestió de dotenv per credencials mailgun
//Afegir package mailer per enviar els correus
//Afegir status return per mostrar succes message al client
