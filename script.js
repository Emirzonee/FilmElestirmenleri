const filmButtons = document.querySelectorAll('.film button');

filmButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('“Hi everyone from javascript”');
    });
});
