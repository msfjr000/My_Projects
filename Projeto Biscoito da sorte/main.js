// Elementos HTML em uma variável
const page1 = document.querySelector('.screen1')
const page2 = document.querySelector('.screen2')
const button2 = document.querySelector('.screen2 button')
const cookieClosed = document.querySelector('#closedCookie')
let phrase = document.querySelector('#phrase')
let randomNumber = Math.round(Math.random()*10)
let random = []
random.push('Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.')
random.push('A vida trará coisas boas se tiver paciência.')
random.push('Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.')
random.push('Não compense na ira o que lhe falta na razão.')
random.push('Defeitos e virtudes são apenas dois lados da mesma moeda.')
random.push('A maior de todas as torres começa no solo.')
random.push('Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?')
random.push('Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.')
random.push('Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.')
random.push('A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.')

function open () {
  page1.classList.add('hide')
  page2.classList.remove('hide')
  phrase.innerText = random[randomNumber]
}

function reset () {
  if(page1.classList.contains('hide')){
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')    
  }
  randomNumber = Math.round(Math.random()*10)
}

cookieClosed.addEventListener('click',open)
button2.addEventListener('click',reset)