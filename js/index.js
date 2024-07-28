const menuToggle = document.getElementById('check-nav');
const menu = document.querySelector('#my-navbar');

function toggleMenu() {
    if (menuToggle.checked) {
        menu.style.left = 0;

    } else {
        menu.style.left = '100%';
    }
}

document.querySelector('.check-btn').addEventListener('click', (event) => {
    event.preventDefault();
    menuToggle.checked = !menuToggle.checked;
    toggleMenu();
});

function ocultarMenu() {
    menuToggle.checked = false;
    toggleMenu();
}

menuToggle.addEventListener('change', toggleMenu);