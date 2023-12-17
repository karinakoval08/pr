document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const formAnswers = document.querySelector('#formAnswers');

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {
        const renderQuestions = () => {
            const questionTitle = document.querySelector('#questionTitle');
            questionTitle.textContent = 'Какого цвета бургер вы хотите?';

            formAnswers.innerHTML = `
                <div class="answers-item d-flex flex-column">
                    <input type="radio" id="answerItem1" name="answer" class="d-none">
                    <label for="answerItem1" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="./image/burger.png" alt="burger">
                        <span>Стандарт</span>
                    </label>
                </div>
            `;
        }

        renderQuestions();
    }
});
