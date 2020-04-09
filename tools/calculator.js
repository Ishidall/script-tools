const BigNumber = require('bignumber.js')

function percentileIntoDecimal(
  percentile,
  decimalPlace = 2,
  willRoundUp = true
) {
  if (percentile < 0 || percentile > 100) {
    throw new Error("Expect percentile to be between 0 and 100.")
  }

  BigNumber.set({
    DECIMAL_PLACES: decimalPlace,
    ROUNDING_MODE: willRoundUp ? BigNumber.ROUND_UP : BigNumber.ROUND_DOWN
  })

  const bnPercentile = new BigNumber(percentile)

  return bnPercentile.dividedBy(100).toNumber()
}

console.log(percentileIntoDecimal(55))
console.log(percentileIntoDecimal(55.5))
console.log(percentileIntoDecimal(55.5, 3))
console.log(percentileIntoDecimal(55.55))
console.log(percentileIntoDecimal(55.55, 3, false))
