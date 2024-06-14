let continu = true
while (continu)
{
let numberOne = Number(prompt('Type a number'))
let numberTwo = Number(prompt('Type a second number'))
let all = [numberOne+numberTwo,numberOne * numberTwo,numberOne - numberTwo,numberOne / numberTwo,numberOne % numberTwo]
  if 
  (String(all[3]) == "NaN")
  {
    alert('Oxe ta de sacanagem?')
  }
  else
  {  
    alert(`A soma dos números é igual a ${all[0]}`)
    alert(`A multiplicação destes números é igual a ${all[1]}`)
    alert(`A subtração destes números é igual a ${all[2]}`)
    alert(`A divisão destes números é igual a ${all[3].toFixed(1)}`)
    alert(`O resto da divisão destes números é igual a ${all[4].toFixed(1)}`)
    
    if (numberOne == numberTwo) {
      alert('Os números em questão são iguais')
    } else if (numberOne != numberTwo) {
      alert('Os números em questão não são iguais')
    }
    
    
    if (all[0] % 2 == 0) {
      alert('A soma destes números é par')
    } else if (all[0] % 2 != 0) {
      alert('A soma destes números é ímpar')
    }
    continu = false
  }
  
}