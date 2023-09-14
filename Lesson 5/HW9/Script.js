let arrALength = parseInt(prompt("Введите размерность массива arrA:"))

if (isNaN(arrALength) || arrALength <= 0) {
  alert("Введите корректное положительное число.")
} else {
  let arrA = []
  for (let i = 0; i < arrALength; i++) {
    arrA.push(Math.floor(Math.random() * 100))
  }

  let arrB = []
  for (let i = 0; i < arrALength; i++) {
    if (isPrime(arrA[i])) {
      arrB.push(arrA[i])
    }
  }

  let minPrime = Math.min(...arrB)
  let maxPrime = Math.max(...arrB)

  alert("Массив arrA: " + arrA.join(", "))
  alert("Простые числа в arrA (массив arrB): " + arrB.join(", "))
  alert("Минимальное простое число в arrB: " + minPrime)
  alert("Максимальное простое число в arrB: " + maxPrime)
}

function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }
  return true
}