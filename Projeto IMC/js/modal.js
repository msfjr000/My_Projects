export const Modal = {
  Wrapper: document.querySelector('.modal-wrapper'),
  Message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.Wrapper.classList.add('open')
  },
  close() {
    Modal.Wrapper.classList.remove('open')
  } 
}
export const Btnmodal = Modal.buttonClose.onclick = Modal.close;

