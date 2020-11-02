'use strict'

// 스크롤 내렸을 시 nav 색 변경
const nav = document.querySelector('#nav');
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.classList.add('nav--dark');
    } else {
        nav.classList.remove('nav--dark');
    }
});