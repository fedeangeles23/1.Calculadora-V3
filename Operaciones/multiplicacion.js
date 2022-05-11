// Implementando Arrow Function + IF Ternario.

let multiplicar = (num1,num2) => num1 !== 0 && num2 !==0 ? "El resultado de la multiplicación es: " + (num1 * num2) : "Todo número multiplicado por cero es cero"


// Versión anterior.

/* let multiplicar = function(num1, num2){
    if (num1 !== 0 && num2 !== 0){
        return "El resultado de la multiplicación es: " + (num1 * num2);
    } return "Todo número multiplicado por cero es cero.";
} */

module.exports = multiplicar;