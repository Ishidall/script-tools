const puppeteer = require("puppeteer")
const BASE_URL = "https://www.superdelivery.com"

const urls = [
  "https://www.superdelivery.com/p/r/pd_p/7561924/",
  "https://www.superdelivery.com/p/r/pd_p/7612120/",
  "https://www.superdelivery.com/p/r/pd_p/6524854/",
  "https://www.superdelivery.com/p/r/pd_p/7555986/",
  "https://www.superdelivery.com/p/r/pd_p/7664501/",
  "https://www.superdelivery.com/p/r/pd_p/7670645/",
  "https://www.superdelivery.com/p/r/pd_p/7546177/",
  "https://www.superdelivery.com/p/r/pd_p/7612108/",
  "https://www.superdelivery.com/p/r/pd_p/7562209/",
  "https://www.superdelivery.com/p/r/pd_p/6524842/",
  "https://www.superdelivery.com/p/r/pd_p/7721433/",
  "https://www.superdelivery.com/p/r/pd_p/7670614/",
  "https://www.superdelivery.com/p/r/pd_p/7673423/",
  "https://www.superdelivery.com/p/r/pd_p/6930855/",
  "https://www.superdelivery.com/p/r/pd_p/7612098/",
  "https://www.superdelivery.com/p/r/pd_p/7670275/",
  "https://www.superdelivery.com/p/r/pd_p/6930697/",
  "https://www.superdelivery.com/p/r/pd_p/6521834/",
  "https://www.superdelivery.com/p/r/pd_p/7716854/",
  "https://www.superdelivery.com/p/r/pd_p/7532823/",
  "https://www.superdelivery.com/p/r/pd_p/7252033/",
  "https://www.superdelivery.com/p/r/pd_p/7909791/",
  "https://www.superdelivery.com/p/r/pd_p/7716628/",
  "https://www.superdelivery.com/p/r/pd_p/7391375/",
  "https://www.superdelivery.com/p/r/pd_p/7546570/",
  "https://www.superdelivery.com/p/r/pd_p/7912804/",
  "https://www.superdelivery.com/p/r/pd_p/7551576/",
  "https://www.superdelivery.com/p/r/pd_p/7562005/",
  "https://www.superdelivery.com/p/r/pd_p/7727712/",
  "https://www.superdelivery.com/p/r/pd_p/7032486/",
  "https://www.superdelivery.com/p/r/pd_p/7396424/",
  "https://www.superdelivery.com/p/r/pd_p/6787316/",
  "https://www.superdelivery.com/p/r/pd_p/6937396/",
  "https://www.superdelivery.com/p/r/pd_p/7607726/",
  "https://www.superdelivery.com/p/r/pd_p/7670623/",
  "https://www.superdelivery.com/p/r/pd_p/6986406/",
  "https://www.superdelivery.com/p/r/pd_p/7551397/",
  "https://www.superdelivery.com/p/r/pd_p/7392564/",
  "https://www.superdelivery.com/p/r/pd_p/7561732/",
  "https://www.superdelivery.com/p/r/pd_p/7544363/",
  "https://www.superdelivery.com/p/r/pd_p/7532817/",
  "https://www.superdelivery.com/p/r/pd_p/6660710/",
  "https://www.superdelivery.com/p/r/pd_p/6799954/",
  "https://www.superdelivery.com/p/r/pd_p/6521851/",
  "https://www.superdelivery.com/p/r/pd_p/6660773/",
  "https://www.superdelivery.com/p/r/pd_p/6814174/",
  "https://www.superdelivery.com/p/r/pd_p/6986362/",
  "https://www.superdelivery.com/p/r/pd_p/6799955/",
  "https://www.superdelivery.com/p/r/pd_p/6657627/",
  "https://www.superdelivery.com/p/r/pd_p/6737289/",
  "https://www.superdelivery.com/p/r/pd_p/6937413/",
  "https://www.superdelivery.com/p/r/pd_p/7550699/",
  "https://www.superdelivery.com/p/r/pd_p/7913921/",
  "https://www.superdelivery.com/p/r/pd_p/7914082/",
  "https://www.superdelivery.com/p/r/pd_p/7914147/",
  "https://www.superdelivery.com/p/r/pd_p/7919572/",
  "https://www.superdelivery.com/p/r/pd_p/7919626/",
  "https://www.superdelivery.com/p/r/pd_p/7718471/",
  "https://www.superdelivery.com/p/r/pd_p/7719936/",
  "https://www.superdelivery.com/p/r/pd_p/7719981/",
  "https://www.superdelivery.com/p/r/pd_p/7720146/",
  "https://www.superdelivery.com/p/r/pd_p/7721474/",
  "https://www.superdelivery.com/p/r/pd_p/7727726/",
  "https://www.superdelivery.com/p/r/pd_p/7670693/",
  "https://www.superdelivery.com/p/r/pd_p/7667058/",
  "https://www.superdelivery.com/p/r/pd_p/7670709/",
  "https://www.superdelivery.com/p/r/pd_p/7673168/",
  "https://www.superdelivery.com/p/r/pd_p/7673334/",
  "https://www.superdelivery.com/p/r/pd_p/7673368/",
  "https://www.superdelivery.com/p/r/pd_p/7716644/",
  "https://www.superdelivery.com/p/r/pd_p/7716787/",
  "https://www.superdelivery.com/p/r/pd_p/7716899/",
  "https://www.superdelivery.com/p/r/pd_p/7716937/",
  "https://www.superdelivery.com/p/r/pd_p/7670638/",
  "https://www.superdelivery.com/p/r/pd_p/7670632/",
  "https://www.superdelivery.com/p/r/pd_p/7608450/",
  "https://www.superdelivery.com/p/r/pd_p/7608444/",
  "https://www.superdelivery.com/p/r/pd_p/7608365/",
  "https://www.superdelivery.com/p/r/pd_p/7663322/",
  "https://www.superdelivery.com/p/r/pd_p/7562417/",
  "https://www.superdelivery.com/p/r/pd_p/7614401/",
  "https://www.superdelivery.com/p/r/pd_p/6799953/",
  "https://www.superdelivery.com/p/r/pd_p/6986304/",
  "https://www.superdelivery.com/p/r/pd_p/6937399/",
  "https://www.superdelivery.com/p/r/pd_p/7561835/",
  "https://www.superdelivery.com/p/r/pd_p/7551943/",
  "https://www.superdelivery.com/p/r/pd_p/7551688/",
  "https://www.superdelivery.com/p/r/pd_p/7550594/",
  "https://www.superdelivery.com/p/r/pd_p/7547501/",
  "https://www.superdelivery.com/p/r/pd_p/7547381/",
  "https://www.superdelivery.com/p/r/pd_p/7546043/",
  "https://www.superdelivery.com/p/r/pd_p/7544665/",
  "https://www.superdelivery.com/p/r/pd_p/7540388/",
  "https://www.superdelivery.com/p/r/pd_p/7532832/",
  "https://www.superdelivery.com/p/r/pd_p/7532830/",
  "https://www.superdelivery.com/p/r/pd_p/7532828/",
  "https://www.superdelivery.com/p/r/pd_p/6722814/",
  "https://www.superdelivery.com/p/r/pd_p/6937414/",
  "https://www.superdelivery.com/p/r/pd_p/6937408/",
  "https://www.superdelivery.com/p/r/pd_p/6937407/",
  "https://www.superdelivery.com/p/r/pd_p/6937405/",
  "https://www.superdelivery.com/p/r/pd_p/6937401/",
  "https://www.superdelivery.com/p/r/pd_p/6930814/",
  "https://www.superdelivery.com/p/r/pd_p/6930049/",
  "https://www.superdelivery.com/p/r/pd_p/6799939/",
  "https://www.superdelivery.com/p/r/pd_p/6814161/",
  "https://www.superdelivery.com/p/r/pd_p/6799951/",
  "https://www.superdelivery.com/p/r/pd_p/6738696/",
  "https://www.superdelivery.com/p/r/pd_p/6709966/",
  "https://www.superdelivery.com/p/r/pd_p/6660424/",
  "https://www.superdelivery.com/p/r/pd_p/6707468/",
  "https://www.superdelivery.com/p/r/pd_p/6606618/",
  "https://www.superdelivery.com/p/r/pd_p/6521835/",
  "https://www.superdelivery.com/p/r/pd_p/6558190/",
  "https://www.superdelivery.com/p/r/pd_p/6558188/",
  "https://www.superdelivery.com/p/r/pd_p/6521836/",
  "https://www.superdelivery.com/p/r/pd_p/6521857/"
]

async function runBrowser() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(BASE_URL)

  const categoryURLs = []
  const categoryLists = await page.$$(".cat-lv2")

  for (let i = 0; i < categoryLists.length; i++) {
    const categoryList = categoryLists[i]

    const categoryListItems = await categoryList.$$("li")

    for (let j = 0; j < categoryListItems.length; j++) {
      const categoryListItem = categoryListItems[j]

      // await categoryListItem.click()
      // await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"})

      const link = await categoryListItem.$("a")
      const url = await link.getProperty("href")

      categoryURLs.push(await url.jsonValue())
    }
  }

  console.log(categoryURLs)

  await browser.close()
}

runBrowser()
