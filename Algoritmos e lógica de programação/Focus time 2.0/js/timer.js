import { press } from "./sounds.js"
import state from "./state.js";
import { kitchen } from "./sounds.js";


export function play () {
  document.documentElement.classList.add('running');
  state.isRunning = true
  press.play();
  countDown()
}

export function pause () {
  document.documentElement.classList.remove('running')
  state.isRunning = false
}

export function reset () {
  minutes.innerText = "00"
  seconds.innerText = "00"
  
  document.documentElement.classList.remove('running')
  state.isRunning = false
}


export function set () {
  minutes.setAttribute('contenteditable',true)
  minutes.innerText = ""
  minutes.focus()

  minutes.onkeypress = (event) => /\d/.test(event.key)

}


minutes.addEventListener('blur',(event => {
  let minutesText = Number(document.getElementById('minutes').innerText)
  let secondsText = document.getElementById('seconds').innerText
  if(minutesText > 60) {
    minutesText = 60
    minutes.innerText = '60'
  }
  minutes.textContent = String(minutesText).padStart(2, "0")
  seconds.textContent = String(secondsText).padStart(2, "0")
  minutes.removeAttribute('contenteditable')
  
}))
function countDown () {
  
  clearTimeout(state.countDownYd)
  if(!state.isRunning) {
    return
  }
  let minutesDown = Number(document.getElementById('minutes').innerText)
  let secondsDown = Number(document.getElementById('seconds').innerText)
  if(minutesDown == '0' && secondsDown == "0") {
    kitchen.play()
    reset()
    return
  }
  secondsDown--
  if (secondsDown < 0) {
    secondsDown = 59
    minutesDown--
  } 
  document.getElementById('minutes').innerText = String(minutesDown).padStart(2,"0")
  document.getElementById('seconds').innerText = String(secondsDown).padStart(2,"0")
  state.countDownYd = setTimeout(()=> 
  countDown()
  ,1000)
}

export function plus () {
  let minutesPlus = Number(document.getElementById('minutes').innerText)
  let secondsPlus = Number(document.getElementById('seconds').innerText)
  if (minutesPlus + 5 > 60) {
    minutesPlus = 60
  } else {
    minutesPlus = minutesPlus + 5
  }

  document.getElementById('minutes').innerText = String(minutesPlus).padStart(2,"0")
}

export function minus () {
  let minutesMinus = Number(document.getElementById('minutes').innerText) 
  if (minutesMinus - 5 < 0) {
    minutesMinus = 0
  } else {
    minutesMinus = minutesMinus - 5
  }
  document.getElementById('minutes').innerText = String(minutesMinus).padStart(2,"0")
}