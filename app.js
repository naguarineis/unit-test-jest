// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro*1.2 
    return valueInDollar
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar*115.61
    return valueInYen
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen*0.0064
    return valueInPound
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };