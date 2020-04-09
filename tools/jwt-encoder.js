const jwt = require('jsonwebtoken')

const secret = ''
const secretStg = ''
const secretPrd = ''

const client = ''

async function getToken() {
  return jwt.sign({ client }, secretPrd)
}

async function verifyToken(token) {
  return jwt.verify(token, secret)
}

getToken().then((res) => {
  console.log(res)

  const decoded = jwt.decode(res)

  console.log(decoded)

  const verified = jwt.verify(res, secret)

  console.log(verified)
}).catch((err) => console.log(err))
