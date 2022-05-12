var hoverShowCase = document.getElementById('hoverShowCase');
var productElements = document.querySelectorAll('.product');
var timeout;
var element;
var x, y;
productElements.forEach(function(productElement) {
    productElement.addEventListener('mouseenter', function(e) {
        element = this;
        hoverShowCase.style.display = 'block';
        hoverShowCase.style.opacity = 1;
        hoverShowCase.style.top = e.clientY + 15 + 'px';
        hoverShowCase.style.left = e.clientX + 15 + 'px';
        hoverShowCase.innerHTML = element.getAttribute('data-text');
    });
    productElement.addEventListener('mouseleave', function(e) {
        clearTimeout(timeout);
        hoverShowCase.style.opacity = 0;
        hoverShowCase.style.display = 'none';
    });
    productElement.addEventListener('mousemove', function(e) {
        hoverShowCase.style.top = e.clientY + 15 + 'px';
        hoverShowCase.style.left = e.clientX + 15 + 'px';
    });
});

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