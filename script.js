const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')

burger.addEventListener("click", () => {
    menu.classList.add("isOpen");
  close.addEventListener("click", () => {
    menu.classList.remove("isOpen");
  });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});