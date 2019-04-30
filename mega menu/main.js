const mega = document.getElementById('mega');
const showcase = document.getElementById('showcase');
const drop = document.getElementById('dd');



mega.addEventListener('mouseover', () => {
    drop.style.display = 'block';
});
window.addEventListener('click', (e) => {
    if (e.target == showcase) {
        drop.style.display = 'none';
    }
});


