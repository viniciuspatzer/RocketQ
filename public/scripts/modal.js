export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener('click', close);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modalWrapper.classList.contains('active')) {
            close();
        }
    });

    modalWrapper.addEventListener('click', e => {
        if (e.target.classList.contains('active')) {
            close();
        }
    });

    function open() {
        modalWrapper.classList.add('active');
    }
    function close() {
        modalWrapper.classList.remove('active');
    }

    return {
        open,
        close
    }
}