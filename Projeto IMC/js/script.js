// Import do modal
import { Modal } from './modal.js'
import { Btnmodal } from './modal.js'
import { form } from './form.js';

// Import do alerta
import { AlertError } from './alert-error.js';

// Import utilitários
import { IMC,notANumber } from './utils.js';


// função aplicada sobre o submit do formulário para aparecer o modal
form.form.onsubmit = (event) => {
  event.preventDefault(event);
  const weight = form.weight.value;
  const height = form.height.value;
 
  const isnotANaN = notANumber(weight) || notANumber(height)

  if (isnotANaN) { 
    AlertError.open()
    return
  }
  AlertError.close()
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${Number(result)}`;
  Modal.Message.innerText = message;
  Modal.open();
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    Modal.close()
  }
})

form.height.oninput = () => AlertError.close()
form.weight.oninput = () => AlertError.close()

