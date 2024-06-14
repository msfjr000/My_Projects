alert('Hello world!')
let number1 = 3
let number2 = 56
let sum = number1 + number2
alert(sum)
let isNumber = typeof(number2)


if (isNumber == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}


let string = "olá"
let isString = typeof(string)
if (isString == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

let isTrue = true
let isTrue1 = typeof(isTrue)
alert(isTrue1)
if (isTrue1 == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

let sub = number1 - number2
alert(sub)

let mult = number1 * number2
alert(mult)

let div = (number1 / number2).toFixed(1)
alert(div)

let isPair = number1 % 2
if (isPair == 0) {
  alert('O número é par')
} else {
  alert('O número é impar')
}

let isImpar = number2 % 2
if (isImpar == 0) {
  alert('O número é par')
} else {
  alert('O número é impar')
}