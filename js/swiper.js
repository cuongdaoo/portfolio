// Swiper 1
var swiper1 = new Swiper('.slider-wrapper-1', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
  delay: 1000,
  disableOnInteraction: true, },

  speed: 800, // 👉 tốc độ chuyển slide (ms) — tăng để mượt hơn
  effect: 'slide', // 'slide' là mặc định, có thể thử 'fade' nếu muốn chuyển nhẹ nhàng hơn

  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Swiper 2
var swiper2 = new Swiper('.slider-wrapper-2', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
  delay: 1000,
  disableOnInteraction: true, },

  speed: 800, // 👉 tốc độ chuyển slide (ms) — tăng để mượt hơn
  effect: 'slide', // 'slide' là mặc định, có thể thử 'fade' nếu muốn chuyển nhẹ nhàng hơn


  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Swiper 3
var swiper3 = new Swiper('.slider-wrapper-3', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
  delay: 1000,
  disableOnInteraction: true, },

  speed: 800, // 👉 tốc độ chuyển slide (ms) — tăng để mượt hơn
  effect: 'slide', // 'slide' là mặc định, có thể thử 'fade' nếu muốn chuyển nhẹ nhàng hơn
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    620: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

// Swiper 4
var swiper4 = new Swiper('.slider-wrapper-4', {
  loop: true,
  grabCursor: true,
  speed: 800,
  //slidesPerView: 1, // ✅ Chỉ hiển thị 1 hình
  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },
  speed: 800, // 👉 tốc độ chuyển slide (ms) — tăng để mượt hơn
  effect: 'slide', // 'slide' là mặc định, có thể thử 'fade' nếu muốn chuyển nhẹ nhàng hơn
  navigation: {
    nextEl: '.swiper-button-next-4',
    prevEl: '.swiper-button-prev-4',
  },
  pagination: {
    el: '.swiper-pagination-4',
    clickable: true,
  },
});
