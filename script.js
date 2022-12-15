const OpenModal = document.querySelector('.open-modal')
const ModalShow = document.querySelector('.modal-show')
const Modal = document.querySelector('.modal-container')
const CloseContainer = document.querySelector('.container')
const rates = document.querySelectorAll('.btn')
const YourRate= document.getElementById('rating')

OpenModal.addEventListener('click', (e) => {
    Modal.classList.add('modal-show');
    CloseContainer.classList.add('close-container');
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        YourRate.innerHTML = rate.innerHTML
    })
});
