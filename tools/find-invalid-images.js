const rp = require("request-promise")

const otherImages = [
  {patternId: 3, skuId: 9, skuImageId: 3118, imageUrl: ""},
]

const skuImages = [
  {patternId: 3, skuIds: [6,7,8], skuImageUrl: ""},
]

async function checkOtherImages() {
  console.log('PatternOtherImages with error')

  for (let i = 0; i < otherImages.length; i++) {
    const otherImage = otherImages[i]
  
    await rp.head(otherImage.imageUrl).catch((err) => {
      const errMsg = `${err.message || JSON.stringify(err)}`
  
      console.log(`patternId: ${otherImage.patternId}, skuId: ${otherImage.skuId}, skuImageId: ${otherImage.skuImageId}, err: ${errMsg}`)
    })
  }
}

async function checkSkuImages() {
  console.log('SkuPreviewImages with error')

  for (let i = 0; i < skuImages.length; i++) {
    const skuImage = skuImages[i]

    await rp.head(skuImage.skuImageUrl).catch((err) => {
      const errMsg = `${err.message || JSON.stringify(err)}`
  
      console.log(`patternId: ${skuImage.patternId}, skuIds: ${skuImage.skuIds.join('| ')}, err: ${errMsg}`)
    })
  }
}

async function main() {
  await checkOtherImages()
  await checkSkuImages()
}

main()