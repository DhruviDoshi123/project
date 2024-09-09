let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchfrom.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchfrom = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = () =>{
    searchfrom.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

  
let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchfrom.classList.remove('active');
   
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchfrom.classList.remove('active');
    cartItem.classList.remove('active');
}