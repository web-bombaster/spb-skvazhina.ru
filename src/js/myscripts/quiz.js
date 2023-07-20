let quizInit = function () {
    let labelRadio = 'label-radio';
    let labelCheckbox = 'label-checkbox';

    document.addEventListener('click', function(e) {
        // Переключение checkbox
        if (e.target.closest('.label-checkbox')) {
            e.target.classList.toggle('toggle');
        };

        // Переключение radio
        if (e.target.closest('.label-radio')) {
            if (!e.target.classList.contains('toggle')) {
                let radioName = e.target.closest('.label-radio').firstElementChild.getAttribute('name');
                let elems = document.querySelectorAll(`[name="${radioName}"]`);
                elems.forEach(function(element) {
                    element.parentElement.classList.remove('toggle');
                });
                e.target.classList.add('toggle');
            };

        };
    });

};

quizInit();

const quizSending = function() {
    let quizForm = document.querySelector('.quiz.form');
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.querySelector('.quiz__middle').classList.add('toggle');
            quizForm.reset();
        });
    }
};

quizSending();

