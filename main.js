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


// 스크롤시 home에 fade효과 적용

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})


//스크롤시 arrow-up버튼 생성되고 누르면 top으로 이동

const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {

    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.display = 'block'
    } else {
        arrowUp.style.display = 'none'
    }
});

arrowUp.addEventListener('click', () => {
    window.scrollTo(0, 0);
});


//hamburger버튼 클릭시 숨김메뉴 펼치기

const navToggleBtn = document.querySelector('.nav__toggle-btn');
const navList = document.querySelector('.nav__menu');

navToggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// 메뉴버튼을 누르면 원하는 위치로 자동 스크롤

const navMenu = document.querySelector('#nav');
navMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }

    navList.classList.remove('active');

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});

