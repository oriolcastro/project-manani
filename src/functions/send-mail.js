import querystring from 'querystring'

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const params = querystring.parse(event.body)
  const email = params.email || 'test@test.com'

  return {
    statusCode: 200,
    body: `Email sended to ${email}`,
  }
}
