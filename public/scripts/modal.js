export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.modal-wrapper .modal form .buttons .button.gray.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        // atribui a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close(){
        // remove a classe active da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open, 
        close
    }
}