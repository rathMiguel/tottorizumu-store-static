import 'reset-css'
import './scss/main.scss'

import 'swiper/css'
import 'swiper/css/pagination'

import Swiper, { Pagination, Navigation } from 'swiper'
Swiper.use([Pagination, Navigation])

new Swiper('#store-swiper', {
  loop: false,
  spaceBetween: 10,
  loopAdditionalSlides: 1,
  slidesPerView: 'auto',
  pagination: {
    el: '#store-swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 1,
      loop: true
    }
  }
})