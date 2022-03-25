
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.querySelector('nav');
const navbarLinks_ul = document.querySelector('.nav_links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  navbarLinks_ul.classList.toggle('active');
})