let firstNum = Number(prompt("Select number 1"))
let secondNum = Number(prompt("Select number 2"))

let resultOne = firstNum + secondNum
let resultTwo = firstNum - secondNum
let resultThree = firstNum * secondNum
let resultFour = firstNum / secondNum

alert(`
    User entered ${firstNum} and ${secondNum}:
    ${firstNum} + ${secondNum} = ${resultOne}\n
    ${firstNum} - ${secondNum} = ${resultTwo}\n
    ${firstNum} * ${secondNum} = ${resultThree}\n
    ${firstNum} / ${secondNum} = ${resultFour}\n
    `)