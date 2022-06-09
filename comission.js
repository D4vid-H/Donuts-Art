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