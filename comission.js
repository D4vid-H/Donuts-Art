const openModal = document.querySelectorAll('.openModalComission');
const modalComission = document.querySelector('.modalComission')
/* const closeModal = document.querySelectorAll('.modal__close'); */

openModal.forEach(modalCard => {
  modalCard.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log(evt);
    modalComission.innerHTML = `<div class="modal__container">
                  
    <img src="${evt.target.currentSrc}" class="modal__Image" alt="" srcset="" />
  
  <button class="modal__close">X</button>
</div>`
modalComission.classList.add('modal--show');
closeModalComission();
})
});

function closeModalComission(){
  const closeModal = document.querySelector('.modal__close');

  closeModal.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalComission.innerHTML = ''
      modalComission.classList.remove('modal--show');
  });
}


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