const windowHeightDivTen = Math.round(window.innerHeight / 10);

const checkIfZoom = () => {
    var element = document.createElement('div');
    element.style.height = 'calc(100vh / 10)';
    element.setAttribute('id', 'checkIfZoom');
    document.body.append(element);
    userSeenHeight = document.getElementById('checkIfZoom').clientHeight;
    if (userSeenHeight === windowHeightDivTen) {
        return false;
    } else {
        return true;
    }
}

setTimeout(() => {
    if (checkIfZoom()) {
        alert('You are using a zoomed in browser');
    }
}, 1000);