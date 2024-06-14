// Variáveis para elementos no DOM
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnInitial = document.querySelector('#btnTry')
const btnFinal = document.querySelector('#btnReset')
let inputNumber = document.querySelector('#inputNumber')
let h1Text = document.querySelector('.screen2 h1')

// Variáveis de controle e de número pseudoaleatório
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

// Funções Callback
function handleClick (event) {
  event.preventDefault()

  if (inputNumber.value == randomNumber ){
    screen1.classList.add('hide')
    h1Text.innerText = `Acertou em ${xAttempts} tentativas`
    screen2.classList.remove('hide')
  } else {
    alert('Errou!')
    xAttempts++
  }
}
function resetAll () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1
  randomNumber = Math.round(Math.random()*10)
}
function enter (e) {
  if (e.key == "Enter" && screen1.classList.contains('hide')) {
    resetAll()
  }
}


//Aplicação de eventos a elementos HTML
btnInitial.addEventListener('click',handleClick)
btnFinal.addEventListener('click',resetAll)
document.addEventListener('keydown', enter)