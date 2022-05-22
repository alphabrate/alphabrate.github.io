hamburger.addEventListener('click', function() {
    var menu = document.getElementsByClassName('menu')[0];
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        menu.style.width = '0';
        menu.style.opacity = 0;
    } else {
        hamburger.classList.add('active');
        menu.style.width = '100%';
        menu.style.opacity = 1;
    }
});

var maxWidthNoClip = 890;
const changeHamburger = () => {
    var hamburger = document.getElementById('hamburger');
    if (window.innerWidth <= maxWidthNoClip) {
        document.body.style.userSelect = 'none';
        hamburger.style.display = 'flex';
        var menu = document.getElementsByClassName('menu')[0];
        document.querySelectorAll('.right>a').forEach(function(element) {
            menu.appendChild(element);
        });
        document.querySelectorAll('.menu>a').forEach(function(element) {
            element.children[0].children[0].style.fill = '#000';
        });
    } else {
        hamburger.style.display = 'none';
    }
};

var load = () => {
    changeHamburger();
}

var changeSize = () => {
    location.reload();
}

document.addEventListener('DOMContentLoaded', load);
window.addEventListener('resize', changeSize);