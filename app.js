var modalOpen = document.querySelector('.Btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__footer button')
var iconClose = document.querySelector('.modal__header i')


function toggleModal(e) {
    modal.classList.toggle('hide')
}
modalOpen.addEventListener('click', toggleModal)
modal.addEventListener('click', function () {
    if (e.target == e.currentTarget) {
        to
    }
})
btnClose.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)