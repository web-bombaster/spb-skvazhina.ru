let quizInit = function () {
    let labelRadio = 'label-radio';
    let labelCheckbox = 'label-checkbox';

    document.addEventListener('click', function(e) {
        // Переключение checkbox
        if (e.target.classList.contains(labelCheckbox)) {
            e.target.classList.toggle('toggle');
        };

        // Переключение radio
        if (e.target.classList.contains(labelRadio)) {
            if (!e.target.classList.contains('toggle')) {
                let radioName = e.target.firstElementChild.getAttribute('name');
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


