import * as sound from './sounds.js'


export function rain () {

  document.documentElement.classList.toggle('rain')
  document.documentElement.classList.remove('fire','forest','coffee')

  if (document.documentElement.classList.contains('rain')) {
    sound.coffeeSound.pause()
    sound.forestSound.pause()
    sound.fireSound.pause()
    sound.rainSound.play()
  } else {
    sound.rainSound.pause()
  }
}

export function fire () {

  document.documentElement.classList.toggle('fire')
  document.documentElement.classList.remove('rain','forest','coffee')

  if (document.documentElement.classList.contains('fire')) {
    sound.coffeeSound.pause()
    sound.forestSound.pause()
    sound.rainSound.pause()
    sound.fireSound.play()
  } else {
    sound.fireSound.pause()
  }
}

export function coffee () {

  document.documentElement.classList.toggle('coffee')
  document.documentElement.classList.remove('fire','forest','rain')

  if (document.documentElement.classList.contains('coffee')) {
    sound.forestSound.pause()
    sound.fireSound.pause()
    sound.rainSound.pause()
    sound.coffeeSound.play()
  } else {
    sound.coffeeSound.pause()
  }
}

export function forest () {
  
  document.documentElement.classList.toggle('forest')
  document.documentElement.classList.remove('fire','rain','coffee')

  if (document.documentElement.classList.contains('forest')) {
    sound.coffeeSound.pause()
    sound.fireSound.pause()
    sound.rainSound.pause()
    sound.forestSound.play()
  } else {
    sound.forestSound.pause()
  }

}
