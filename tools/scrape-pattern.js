const puppeteer = require("puppeteer")

const urls = [
  ""
]

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

async function scrapeURL(page, url) {
  await page.goto(url)

  const patternTable = await page.$(".set-list")

  const rows = await patternTable
    .$$("tbody > tr.ts-tr02")

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]

    const pCode = await row.$(".td-set-detail")
    const pCodeDiv = await pCode.$("div")
    const pCodeText = await page.evaluate(el => el.textContent, pCodeDiv)

    const price = await row.$(".maker-product-price")
    const priceDiv = await price.$("div.float-right")
    const priceText = await page.evaluate(el => el.textContent, priceDiv)

    console.log(`${url}\t${pCodeText.split("\n")[1].replace(/\t/g, "")}\t${priceText.split("\n")[3].replace(/\t/g, "")}`)
  }
}

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (let i = 0; i < urls.length; i++) {
    await scrapeURL(page, urls[i])

    await sleep(500)
  }
}

main()
