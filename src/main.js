// Toogle Activation Hamburger
const sideBar = document.querySelector('nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
  sideBar.classList.toggle('active');
  e.preventDefault();
};

// Shopping Cart
const shoppingCart = document.querySelector('.cart');

document.querySelector('#shopping-cart').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Toogle Activation Search
const searchColumn = document.querySelector('.search-column');
const searchForm = document.querySelector('#search-form');

document.querySelector('#magnify-search').onclick = (e) => {
  searchColumn.classList.toggle('active');
  searchForm.focus();
  e.preventDefault();
};

// Close outSide
const hamburger = document.querySelector('#hamburger-menu');
const search = document.querySelector('#magnify-search');
const cart = document.querySelector('#shopping-cart');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !sideBar.contains(e.target)) {
    sideBar.classList.remove('active');
  }

  if (!search.contains(e.target) && !searchColumn.contains(e.target)) {
    searchColumn.classList.remove('active');
  }

  if (!cart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});
