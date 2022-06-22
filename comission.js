const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (evt) => {
	evt.preventDefault();
modal.classList.add('modal--show');

});
closeModal.addEventListener('click', (evt) => {
	evt.preventDefault();
modal.classList.remove('modal--show');

});

// When the user scrolls the page, execute myFunction
window.onscroll = () => myFunction();

// Get the header
let header = document.querySelector(".nav");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("navBarWhite");
  } else {
    header.classList.remove("navBarWhite");
  }
} 