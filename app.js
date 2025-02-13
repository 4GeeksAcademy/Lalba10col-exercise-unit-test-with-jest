// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Declaramos una primera función con el nombre asignado fromEuroToDollar
const fromEuroToDollar = function (ValueInEuro) {
    //Convertir el valor en dolares
    let resultInDollar = ValueInEuro * oneEuroIs.USD;
    //Retornamos el valor en dolares
    return resultInDollar;
}
//Declaramos una segunda función con el nombre asignado fromDollarToYen
const fromDollarToYen = function (ValueInDollar) {
    //Convertir el valor en Yenes
    let resultInYen = (ValueInDollar / oneEuroIs.USD) * oneEuroIs.JPY;
    //Retornamo el valor en Yenes
    return resultInYen
}
//Declaramos una tercera función con el nombre asignado fromYenToPound
const fromYenToPound = function (ValueInYen) {
    //Convertir el valor en Pounds
    let resultInPound = (ValueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    //Retornamos el valor en Pounds
    return resultInPound
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };