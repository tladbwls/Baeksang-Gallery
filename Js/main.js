// open사이드메뉴
const sideOpen = document.querySelector(".side-nav-wrap .side-nav-btn a");
const sideClose = document.querySelector(
  ".side-nav-wrap .side-nav-menu .logo .side-close-btn"
);
const overlay = document.querySelector(".side-nav-wrap .overlay");
const sideMenu = document.querySelector(".side-nav-menu");
// 사이드메뉴 열기
sideOpen.addEventListener("click", function () {
  sideOpen.classList.toggle("open");
  if (sideOpen.classList.contains("open")) {
    sideClose.classList.add("open");
    overlay.classList.add("open");
    sideMenu.style.left = "0";
  }
});
// 사이드메뉴 닫기
sideClose.addEventListener("click", function () {
  sideClose.classList.toggle("open");
  if (!sideClose.classList.contains("open")) {
    sideOpen.classList.remove("open");
    overlay.classList.remove("open");
    sideMenu.style.left = "-64rem";
  }
});

// 사이드메뉴 안 아코디언 메뉴
const all = document.querySelectorAll(".nav-menu-wrap>ul>li");
const accHd = document.querySelectorAll(".side-acc");

// accHD를 눌렀을 때 부모요소에 open이 들어가며 열리게
accHd.forEach(function (Hd, i) {
  accHd[i].addEventListener("click", toggleItem);
  sideClose.addEventListener("click", toggleClose);
});
//부모 요소에 open이 들어갔을 때 다른 부모요소는 open 빼기
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < all.length; i++) {
    all[i].className = "nav-menu-close";
  }
  if (itemClass == "nav-menu-close") {
    this.parentNode.className = "open";
  }
}
//x버튼 눌렀을 때 모두 닫히게
function toggleClose() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < all.length; i++) {
    all[i].className = "nav-menu-close";
  }
}
// first swiper slider
var menu = ["BAEXANG GALLARY SHOP <br> GRAND OPEN", "GRAND OPEN", "BAEXANG"];
var menu1 = ["01", "02", "03"];
var swiper = new Swiper(".swiper-section .mySwiper", {
  pagination: {
    el: ".swiper-section .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return (
        '<div class="' +
        className +
        '">' +
        "<span>" +
        menu1[index] +
        "</span>" +
        "<strong>" +
        menu[index] +
        "</strong>" +
        "</div>"
      );
    },
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".swiper-section .swiper-button-next",
    prevEl: ".swiper-section .swiper-button-prev",
  },
});

// best swiper slider
var swiper = new Swiper(".best-section .mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".best-section .swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".best-section .swiper-button-next",
    prevEl: ".best-section .swiper-button-prev",
  },
  breakpoints: {
    760: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
    1441: {
      slidesPerView: 4,
      spaceBetweenSlides: 30,
    },
  },
});

//MD pick tab
const tabItem = document.querySelectorAll(".MD-tab-menu .MD-tab .tab-item");
const tabInner = document.querySelectorAll(
  ".MD-tab-menu .tab-inner-wrap .tab-inner"
);

tabItem.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner.forEach((inner) => {
      inner.classList.remove("active");
    });
    tabItem.forEach((item) => {
      item.classList.remove("active");
    });
    tabItem[idx].classList.add("active");
    tabInner[idx].classList.add("active");
  });
});

// New swiper slider
var swiper = new Swiper(".new-section .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".new-section .swiper-button-next",
    prevEl: ".new-section .swiper-button-prev",
  },
});
