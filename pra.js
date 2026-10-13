let productPrices = [25,40,55,76,88]

let discountedPrices = productPrices.map(price=>price*0.9)
let discountedPricess = productPrices.map(price=>price*10%100)

console.log(discountedPrices)
console.log(discountedPricess)

let afforableProducts = discountedPrices.filter(price=>price<50)

console.log(afforableProducts)

let total = afforableProducts.reduce((sum,price)=>sum+price,0)

console.log(total)