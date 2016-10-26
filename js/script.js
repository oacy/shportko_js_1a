var base; // Основание степени
var exponent; // Показатель степени
var result=1;
var message;


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

for (var i = 0; i < exponent; i++) {
     result *= base;
}

console.log('Результат: ', result);

message=base+ ' в степени ' + exponent + ' равно: ' + result;

alert(message);