const btnMenu = document.getElementById('btn-menu');

function toggleMenu(){
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)