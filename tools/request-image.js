const rp = require("request-promise")
const ft = require("file-type")

const imageUrl = ""

async function main() {
  const header = await rp.head(imageUrl).catch((err) => { console.log(err) })
  const res = await rp.get(imageUrl)

  console.log(header)
  console.log(Buffer.isBuffer(res))
}

main()