// Implementando Arrow Function + IF Ternario

let dividir = (num1,num2) => num1 !== 0 && num2 !==0 ? "El resultado de la división es: " + (num1 / num2) : "No se puede dividir por cero"


/* let dividir = function(num1, num2){
    if (num1 !== 0 && num2 !== 0){
        return "El resultado de la división es: " + (num1 / num2);
    } return "No se puede dividir por cero";
} */

module.exports = dividir;