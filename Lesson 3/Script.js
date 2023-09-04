let num1 = parseFloat(prompt("Введите первое число:"))
let num2 = parseFloat(prompt("Введите второе число:"))
let num3 = parseFloat(prompt("Введите третье число:"))

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  
  let average = (num1 + num2 + num3) / 3

  alert(`Среднее арифметическое: ${average}`)
} else {
  
  alert("Пожалуйста, введите действительные числа.")
}