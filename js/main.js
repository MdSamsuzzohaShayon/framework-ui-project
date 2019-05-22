$('.ui.accordion')
    .accordion();
$('.ui.dropdown')
    .dropdown();

const filter = document.getElementById('filter');
filter.addEventListener('click', () => {
    if (window.innerWidth < 412) {
        filter.style.background = 'purple';
    }
});