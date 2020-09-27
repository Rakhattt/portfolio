"use strict";

var hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
hamburger.addEventListener('click', function () {
  menu.classList.add('active');
});
close.addEventListener('click', function () {
  menu.classList.remove('active');
});