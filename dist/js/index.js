/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
$(document).ready(function () {
  const card = document.querySelectorAll('.services__card');
  const all = document.querySelector('#all');
  const commercial = document.querySelector('#commercial');
  const residential = document.querySelector('#residential');
  const other = document.querySelector("#other");
  const carousel = document.querySelector('.owl-carousel');
  console.log(carousel);
  card.forEach(el => {
    el.addEventListener("mouseover", () => {
      el.classList.add('active');
    }, false);
    el.addEventListener("mouseout", () => {
      el.classList.remove('active');
    }, false);
  });
  const owl = $(".owl-carousel").owlCarousel({
    items: 4,
    nav: true,
    navText: [`<img src="img/icons/Arrow_left.png" alt="left">`, `<img src="img/icons/Arrow_right.png" alt="right">`]
  });
  $('.projects__nav_list').on('click', '.projects__nav_list-item', function () {
    var $item = $(this);
    var filter = $item.data('owl-filter');
    owl.owlcarousel2_filter(filter);
  });
  all.addEventListener("click", event => {
    all.classList.toggle('active');
    if (commercial.classList.contains('active')) {
      commercial.classList.remove('active');
    }
    if (residential.classList.contains('active')) {
      residential.classList.remove('active');
    }
    if (other.classList.contains('active')) {
      other.classList.remove('active');
    }
  });
  commercial.addEventListener("click", event => {
    commercial.classList.toggle('active');
    if (all.classList.contains('active')) {
      all.classList.remove('active');
    }
    if (residential.classList.contains('active')) {
      residential.classList.remove('active');
    }
    if (other.classList.contains('active')) {
      other.classList.remove('active');
    }
  });
  residential.addEventListener("click", event => {
    residential.classList.toggle('active');
    if (all.classList.contains('active')) {
      all.classList.remove('active');
    }
    if (commercial.classList.contains('active')) {
      commercial.classList.remove('active');
    }
    if (other.classList.contains('active')) {
      other.classList.remove('active');
    }
  });
  other.addEventListener("click", event => {
    other.classList.toggle('active');
    if (all.classList.contains('active')) {
      all.classList.remove('active');
    }
    if (commercial.classList.contains('active')) {
      commercial.classList.remove('active');
    }
    if (residential.classList.contains('active')) {
      residential.classList.remove('active');
    }
  });
});
/******/ })()
;