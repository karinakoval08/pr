document.addEventListener('DOMContentLoaded', function() {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const formAnswers = document.querySelector('#formAnswers');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    const questionTitle = document.querySelector('#question');

    const questions = [
        {
            question: 'Какого цвета бургер вы хотите?',
            answers: [
                {
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ]
        },
        {
            question: 'Какого цвета бургер вы хотите?',
            answers: [
                {
                    title: 'Стандарт1',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный1',
                    url: './image/burgerBlack.png'
                }
            ]  
        },
        {
            question: 'Какого цвета бургер вы хотите?',
            answers: [
                {
                    title: 'Стандарт2',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный2',
                    url: './image/burgerBlack.png'
                }
            ]  
        },
        {
            question: "Из какого мяса котлета?",
            answers: [
                {
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
        question: "Дополнительные ингредиенты?",
        answers: [
            {
                title: 'Помидор',
                url: './image/tomato.png'
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Лук',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Добавить соус?",
        answers: [
            {
                title: 'Чесночный',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png'
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    },
    ];
    
    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {
        let numberQuestion = 0;

        const renderAnswers = (index) => {
            // Очищення попередніх відповідей
            formAnswers.innerHTML = '';
        
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
        
                answerItem.innerHTML = `
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                        <img class="answerImg" src="${answer.url}" alt="burger">
                        <span>${answer.title}</span>
                    </label>
                `;
                formAnswers.appendChild(answerItem);
            });
        };
        const updateButtonsVisibility = () => {
            switch (numberQuestion) {
                case 0:
                    prevButton.style.display = 'none';
                    break;
                default:
                    prevButton.style.display = 'inline-block';
                    break;
            }
        
            switch (numberQuestion) {
                case questions.length - 1:
                    nextButton.style.display = 'none';
                    break;
                default:
                    nextButton.style.display = 'inline-block';
                    break;
            }
        };
        
        const renderQuestions = (indexQuestion) => {
            questionTitle.textContent = questions[indexQuestion].question;
            renderAnswers(indexQuestion);
        };

        updateButtonsVisibility();

        nextButton.onclick = () => {
            numberQuestion++;
            renderQuestions(numberQuestion);
            updateButtonsVisibility();
        };
        
        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
            updateButtonsVisibility();
        };
    }
})
