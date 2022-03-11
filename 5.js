

/**
 *  функция выполняет сложение
 * @param {number} x
 * @param {number} y
 */
function addition(x, y) {
    return x + y;
}


/**
 *  функция выполняет вычитание
 * @param {number} x
 * @param {number} y
 */
function subtraction(x, y) {
    return x - y;
}

/**
 *  функция выполняет умножение
 * @param {number} x
 * @param {number} y
 */
function multiplication(x, y) {
    return x * y;
}

/**
 *  функция выполняет деление
 * @param {number} x
 * @param {number} y
 */
function division(x, y) {
    return x / y;
}
/**
 * Функция выполнения  основных мат операций 
 * @param {number} arg1 
 * @param {humber} arg2 
 * @param {string} operation 
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return  addition(arg1, arg2);
          
        case "-":
            return  subtraction(arg1, arg2);
           
        case "*":
            return  multiplication(arg1, arg2);

        case "/":
         return  division(arg1, arg2);
           
    }

} 
alert ( mathOperation(5, 5, "+"));