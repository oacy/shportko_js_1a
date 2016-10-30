var base; // Основание степени
var exponent; // Показатель степени
var message;
var result;

base = prompt('Введите основание степени');
exponent = prompt('Введите показатель степени');


/**Функция возведения в степень
 *
 * @param b - Переменная, которую нужно возвести в степень
 * @param exp - Степень
 * @returns {number} - Аргумент b, возведенный в степень
 */
function pow(b, exp) {
    var res = 1;
    for (var i = 0; i < Math.abs(exp); i++) {
        res *= b;
    }
    if (exp >= 0) {
        return res;
    } else {
        return 1 / res;
    }
}

result = pow(base, exponent);

console.log('Результат: ', result);

message = base + ' в степени ' + exponent + ' равно: ' + result;

alert(message);