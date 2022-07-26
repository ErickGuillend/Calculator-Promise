const miCalculadora = (opera, num1, num2) => {
    return new Promise ((resolve, reject) => {
        if (opera === 1) {
            resta = num1 - num2;
            resolve("El resultado de la Resta es: " + resta);
        } else if (opera === 2) {
            suma = num1 + num2;
            resolve("El resultado de la Suma es: " + suma);
        } else if (opera === 3) {
            multiplicacion = num1 * num2;
            resolve("El resultado de la Multiplicación es: " + multiplicacion);
        }else if (opera === 4){
            division = num1 / num2;
            resolve("El resultado de la División es: " + division);
        } else {
            reject("Su operación no es válida");
        }
    });
}

miCalculadora(4, 14, 2)
.then (result => console.log(result))
.catch (e => console.log(e))