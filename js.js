/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Ну, вкусно... вкусно... не то чтобы по вкусу вкусно, но по сути — вкусно😻')
})