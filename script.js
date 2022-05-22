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