import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');


const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick);
});

const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false));
});


function handleClick(event, check = true) {
    event.preventDefault();

    const text = check ? 'Marcar como lida' : 'Excluir';
    const slug = check ? 'check' : 'delete';
    const roomId = document.querySelector('#room-id').dataset.id;
    const questionId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.textContent = `${text} essa pergunta`;
    modalDescription.textContent = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`;
    modalButton.textContent = `Sim, ${text.toLowerCase()}`;

    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

    modal.open();
}

// Copy button
const copyButton = document.querySelector('.button#room-id');

copyButton.addEventListener('click', function () {
    const cb = navigator.clipboard;
    const roomCode = copyButton;
    cb.writeText(roomCode.innerText).then(() => alert('Código da sala copiado!'));
});