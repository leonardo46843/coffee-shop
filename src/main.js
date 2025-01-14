// Toogle Activation
const sideBar = document.querySelector('nav');

document.querySelector('#hamburger-menu').onclick = () => {
  sideBar.classList.toggle('active');
};

// Close outSide
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !sideBar.contains(e.target)) {
    sideBar.classList.remove('active');
  }
});
