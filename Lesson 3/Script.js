let num1 = parseFloat(prompt("Enter first number:"))
let num2 = parseFloat(prompt("Enter second number:"))
let num3 = parseFloat(prompt("Enter third number:"))

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  
  let average = (num1 + num2 + num3) / 3

  alert(`Average: ${average}`)
} else {
  
  alert("Please enter valid numbers.")
}