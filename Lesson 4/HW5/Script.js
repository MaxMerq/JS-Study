let a = parseInt(prompt("Введите значение переменной a:"))

let b = parseInt(prompt("Введите значение переменной b (больше чем a):"))
while (b <= a) {
    b = parseInt(prompt("Введите значение переменной b (больше чем a):"))
}

let h = parseInt(prompt("Введите значение переменной h (больше нуля):"))
while (h <= 0) {
    h = parseInt(prompt("Введите значение переменной h (больше нуля):"))
}

let sumOfFactorials = 0

for (var i = a; i <= b; i += h) {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }

    let currentFactorial = factorial(i)
    sumOfFactorials += currentFactorial
}
alert("Сумма факториалов чисел в заданном диапазоне: " + sumOfFactorials)