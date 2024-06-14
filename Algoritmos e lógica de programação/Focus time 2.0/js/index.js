import * as control from './functions.js'
import * as timer from './timer.js'
import { click12 } from './toggleMode.js';


const control2 = document.getElementById('principal')
function registerControls() {
  control2.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (typeof control[action] === 'function') {
      control[action]()
    } 
    if (typeof timer[action] === 'function') {
      timer[action]()
    }
    if (action === 'click12') {
      click12()
    }
  });
}

registerControls(); 

