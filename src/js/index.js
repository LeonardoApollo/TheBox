'use strict';

const card = document.querySelectorAll('.services__card');

card.forEach((el) => {
    el.addEventListener("mouseover", () => {
        el.classList.add('active');
    }, false)

    el.addEventListener("mouseout", () => {
        el.classList.remove('active');
    }, false)
}) 

