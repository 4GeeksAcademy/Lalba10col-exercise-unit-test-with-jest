// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
// Prueba que sirve para asegurarnos de que la función fromEuroToDollar ha sido correctamente implementada 
test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//Prueba que sirve para asegurarnos que la funcion fromDollarToYen ha sido correctamente implementada
test("One dollar should be 146.2616822429907 Yenes", function () {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const Yenes = fromDollarToYen(5);
    // Si 1 dolar son 154.375 Yenes, entonces 5 dolares debe ser (5 * 154.375)
    const expected = (5 / 1.07) * 156.5;
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(5)).toBe(731.3084112149533); // 5 dolares deberían ser = (731.3084112149533)
})

//Prueba que sirve para asegurarnos que la funcion fromTenToPuond ha sido correctamente implementada
test("One Yen should be 0.00555910543413099 Pounds", function () {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Uso la función como debe ser usada
    const Yenes = fromYenToPound(1000);
    // Si 1 Yen son 0.0055591054313099, entonces 1000 Yenes debe ser (1000/156.5) * 0.87
    const expected = (1000 / 156.5) * 0.87;
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(1000)).toBe(5.559105431309905); // 1000 Yenes deberían ser = (5.559105431309904)
})