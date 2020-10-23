let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(ev) {
  console.log('клик');
  ev.preventDefault();
  menu.classList.toggle('visible');
})
