var base; // Основание степени
var exponent; // Показатель степени
var message;
var result;


/**
 * Проверяет данные ручного ввода
 *
 * @param base
 * @returns {boolean}
 */
function isNumeric(base) {
    return !isNaN(parseFloat(base)) && isFinite(base);
}

base=prompt('Введите основание степени');

while (isNumeric(base) != true){
    base=prompt('Введенное значение не является числом, повторите ввод')
}

exponent = prompt('Введите показатель степени')

while (isNumeric(exponent) != true) {
    exponent = prompt('Введенное значение не является числом, повторите ввод')
}


/**Функция возведения в степень
 * 
 * @param exp
 * @param b
 * @returns {number}
 */
function pow(exp, b) {
    var res=1;
    for (var i = 0; i < exp; i++) {
        res *= b;
    }
    return res;
}

result=pow(exponent, base);

console.log('Результат: ', result);

message=base+ ' в степени ' + exponent + ' равно: ' + result;

alert(message);