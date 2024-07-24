var minu = document.getElementById("menu")
// console.log(document.title);
if (document.title == "Home")
    minu.style.display="none";
    // minu.style.opacity="0";
else
    minu.style.display="block";
    // minu.style.opacity = "1";
var dropmenu = document.getElementById("dropdown-menu");
minu.onmouseover = function () {
        dropmenu.style.display="block"
    }
minu.onmouseleave = function () {
        dropmenu.style.display="none"
    }
//////////////////////
//home
var muma = document.getElementById("mumia")
muma.onclick = function () {
    window.location = '/Home.html';   
}
///////////////////////
//about
var about = document.getElementById("About");
about.onclick = function () {
    window.location = '/About.html';   
}
///////////////////////
//cart
var cart = document.getElementById("cart-container")
cart.onclick = function () {
    window.location = 'Cart.html';
}
////////////////////////
//about
var mumaimg = document.getElementById("misonimg");
mumaimg.onmouseover = function () {
    mumaimg.style.transform = "scale(1.2)"
    mumaimg.style.transition="all 1s linear"
}
mumaimg.onmouseleave = function () {
    mumaimg.style.transform = "scale(1)"
    mumaimg.style.transition="all 1s linear"}
