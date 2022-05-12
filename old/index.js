b1 = 220;
b2 = 740;
b3 = 4000;
intro = document.getElementById("intro");
product = document.getElementById("products");
other = document.getElementById("other");
intro.onclick = function(){
    window.scrollTo(0, b1+1);
}
product.onclick = function(){
    window.scrollTo(0, b2+1);
}
other.onclick = function(){
    window.scrollTo(0, b3+1);
}

document.body.onscroll = function(){
    if(window.scrollY < b1){
        document.getElementsByClassName("nav_btn")[0].style.backgroundColor = "#f1592a";
        document.getElementsByClassName("nav_btn")[1].style.backgroundColor = "#f1592a";
        document.getElementsByClassName("nav_btn")[2].style.backgroundColor = "#f1592a";
    }
    if(window.scrollY > b1 && window.scrollY < b2){
        document.getElementsByClassName("nav_btn")[0].style.backgroundColor = "#ff3c00";
        document.getElementsByClassName("nav_btn")[1].style.backgroundColor = "#f1592a";
        document.getElementsByClassName("nav_btn")[2].style.backgroundColor = "#f1592a";
    }
    if(window.scrollY > b2 && window.scrollY < b3){
        document.getElementsByClassName("nav_btn")[1].style.backgroundColor = "#ff3c00";
        document.getElementsByClassName("nav_btn")[0].style.backgroundColor = "#f1592a";
        document.getElementsByClassName("nav_btn")[2].style.backgroundColor = "#f1592a";
    }
    if(window.scrollY > b3){
        document.getElementsByClassName("nav_btn")[2].style.backgroundColor = "#ff3c00";
        document.getElementsByClassName("nav_btn")[0].style.backgroundColor = "#f1592a";
        document.getElementsByClassName("nav_btn")[1].style.backgroundColor = "#f1592a";
    }
}