// Вивести числа від 10 до 20 в один рядок через кому:
let output = ""
for (let i = 10; i <= 20; i++) {
  output += i + ", "
}
console.log(output.slice(0, -2))

// Вивести квадрати чисел від 10 до 20:
for (let i = 10; i <= 20; i++) {
  console.log(i * i)
}

// Вивести таблицю множення на 7:
for (let i = 1; i <= 10; i++) {
  console.log(i + " * 7 = " + (i * 7))
}

// Знайти суму всіх цілих чисел від 1 до 15:
let sum1 = 0
for (let i = 1; i <= 15; i++) {
  sum1 += i
}
console.log(sum1)

// Знайти добуток усіх цілих чисел від 15 до 35:
let product = 1
for (let i = 15; i <= 35; i++) {
  product *= i
}
console.log(product)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500:
let sum2 = 0
for (let i = 1; i <= 500; i++) {
  sum2 += i
}
let average = sum2 / 500
console.log(average)

// Вивести суму лише парних чисел в діапазоні від 30 до 80:
let sum3 = 0
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum3 += i
  }
}
console.log(sum3)

// Вивести всі числа в діапазоні від 100 до 200, кратні 3:
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}