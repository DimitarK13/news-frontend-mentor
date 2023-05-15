const btnToggle = document.querySelector('.toggle-nav');
const btnImg = btnToggle.querySelector('img');
const nav = document.querySelector('.primary-nav');

btnToggle.addEventListener('click', () => {
  let isOpened = nav.getAttribute('data-expanded') === 'true';

  isOpened ? closeNav() : openNav();
});

const closeNav = () => {
  nav.setAttribute('data-expanded', 'false');
  btnImg.setAttribute('src', 'assets/images/icon-menu.svg');
};

const openNav = () => {
  nav.setAttribute('data-expanded', 'true');
  btnImg.setAttribute('src', 'assets/images/icon-menu-close.svg');
};
