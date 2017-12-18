window.onload = () => {

let panels = document.querySelectorAll('.panel');

function open(){
  this.classList.toggle('open');
}

function activate(){
  this.classList.toggle('active');
}
panels.forEach( panel => panel.addEventListener('click', open));
panels.forEach( panel => panel.addEventListener('click', activate));



}
