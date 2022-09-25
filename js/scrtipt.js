window.onload = function(){
var search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick =()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');

};
//Navbar////
var navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick =()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');

};
//removw menu and search icon on scroll //
window.onscroll=()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
//header animation///
var header =document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.addEventListener.toggle('active',window.screenY>0);
});
}