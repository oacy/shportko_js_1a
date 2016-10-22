var base; // Основание степени
var exponent; // Показатель степени
var result=1;

// Функция проверки ручного ввода
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
     result = result * base;
}

console.log('Результат: ', result);
