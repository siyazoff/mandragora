const homeBannerSwiper = new Swiper(".home-banner-swiper", {
  slidesPerView: 1,
  speed: 800,

  pagination: {
    el: ".home-banner-swiper__pagination",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".home-banner-swiper__next",
    prevEl: ".home-banner-swiper__prev",
  },
});

const swiperHomePartners = new Swiper(".swiper-home-partners", {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-home-partners__pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-home-partners__btn_next",
    prevEl: ".swiper-home-partners__btn_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {},
  },
});

const singleProductThumbs = new Swiper(".section-single-product-thumbs", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 22,
  watchSlidesProgress: true,
  speed: 800,

  breakpoints: {
    320: {
      direction: "horizontal",
      spaceBetween: 12,
    },
    768: {},
  },
});

const singleProductSwiper = new Swiper(".section-single-product-swiper", {
  slidesPerView: 1,
  speed: 800,
  grabCursor: true,
  thumbs: {
    swiper: singleProductThumbs,
  },
});

const servicesInnerGallery = new Swiper(".swiper-services-inner-gallery", {
  slidesPerView: 2.6,
  spaceBetween: 20,
  speed: 800,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-services-inner-gallery__next",
    prevEl: ".swiper-services-inner-gallery__prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2.03,
      spaceBetween: 8,
      pagination: {
        el: ".swiper-services-inner-gallery__pagination",
        type: "progressbar",
      },
    },
    768: {},
  },
});
