let AIMicrosoft = document.querySelector(".micro");
let vasle = document.querySelector(".vasle");
let listjs = document.querySelector(".listjs");
let body = document.querySelector("body");
AIMicrosoft.addEventListener("click", function () {
  listjs.classList.toggle("showlist");
  vasle.classList.toggle("showlist");
});
document.addEventListener("click", function (x) {
  if (x.target === body) {
    listjs.classList.remove("showlist");
    vasle.classList.remove("showlist");
  }
});
//js acor
let hamber = document.querySelector(".hamber");
let acor = document.querySelector(".acor");
let zarb = document.querySelector(".zarb");
hamber.addEventListener("click",function(){
  acor.classList.toggle("showlist");
  zarb.classList.add("show");
  hamber.classList.add("hidden");
})
zarb.addEventListener("click",function(){
  acor.classList.toggle("showlist");
  zarb.classList.remove("show");
  hamber.classList.remove("hidden");
})
window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) { 
    acor.classList.remove("showlist");
  }
});

let part10 = document.querySelector(".part10");
let zir10 = document.querySelector(".zir10");
let up10 = document.querySelector(".up10");
let down10 = document.querySelector(".down10");

let part11 = document.querySelector(".part11");
let zir11 = document.querySelector(".zir11");
let up11 = document.querySelector(".up11");
let down11 = document.querySelector(".down11");

let part12 = document.querySelector(".part12");
let zir12 = document.querySelector(".zir12");
let up12 = document.querySelector(".up12");
let down12 = document.querySelector(".down12");

let part13 = document.querySelector(".part13");
let zir13 = document.querySelector(".zir13");
let up13 = document.querySelector(".up13");
let down13 = document.querySelector(".down13");

let part14 = document.querySelector(".part14");
let zir14 = document.querySelector(".zir14");
let up14 = document.querySelector(".up14");
let down14 = document.querySelector(".down14");

let part15 = document.querySelector(".part15");
let zir15 = document.querySelector(".zir15");
let up15 = document.querySelector(".up15");
let down15 = document.querySelector(".down15");
part10.addEventListener("click",function(){
  zir10.classList.toggle("showlist");
  up10.classList.toggle("show");
  down10.classList.toggle("hide");

})
part11.addEventListener("click",function(){
  zir11.classList.toggle("showlist");
  up11.classList.toggle("show");
  down11.classList.toggle("hiden");

})
part12.addEventListener("click",function(){
  zir12.classList.toggle("showlist");
  up12.classList.toggle("show");
  down12.classList.toggle("hiden");

})
part13.addEventListener("click",function(){
  zir13.classList.toggle("showlist");
  up13.classList.toggle("show");
  down13.classList.toggle("hiden");

})
part14.addEventListener("click",function(){
  zir14.classList.toggle("showlist");
  up14.classList.toggle("show");
  down14.classList.toggle("hiden");

})
part10.addEventListener("click",function(){
  zir10.classList.toggle("showlist");
  up10.classList.toggle("show");
  down10.classList.toggle("hiden");

})
part10.addEventListener("click",function(){
  zir10.classList.toggle("showlist");
  up10.classList.toggle("show");
  down14.classList.toggle("hiden");

})
part15.addEventListener("click",function(){
  zir15.classList.toggle("showlist");
  up15.classList.toggle("show");
  down15.classList.toggle("hiden");

})
////////////////////////////////////js search(first)
let jssearch = document.querySelector(".jssearch");

let lilg  = document.querySelector(".lilg");
let lilg1 = document.querySelector(".lilg1");
let lilg2 = document.querySelector(".lilg2");
let lilg3 = document.querySelector(".lilg3");
let lilg4 = document.querySelector(".lilg4");
let lilg5 = document.querySelector(".lilg5");
let lilg6 = document.querySelector(".lilg6");
let lilg7 = document.querySelector(".lilg7");
let lilg8 = document.querySelector(".lilg8");

let navright = document.querySelector(".navright");
let searchlg = document.querySelector(".searchlg");
let cancel   = document.querySelector(".cancel");



searchlg.addEventListener("click", function () {

  lilg.classList.add("hiden");
  lilg1.classList.add("hiden");
  lilg2.classList.add("hiden");
  lilg3.classList.add("hiden");
  lilg4.classList.add("hiden");
  lilg5.classList.add("hiden");
  lilg6.classList.add("hiden");
  lilg7.classList.add("hiden");
  lilg8.classList.add("hiden");

  navright.classList.add("hiden");
  navright.classList.remove("showflex");

  jssearch.classList.remove("hiden");
  jssearch.classList.add("showlist");
});



cancel.addEventListener("click", function () {

  lilg.classList.remove("hiden");
  lilg1.classList.remove("hiden");
  lilg2.classList.remove("hiden");
  lilg3.classList.remove("hiden");
  lilg4.classList.remove("hiden");
  lilg5.classList.remove("hiden");
  lilg6.classList.remove("hiden");
  lilg7.classList.remove("hiden");
  lilg8.classList.remove("hiden");

  navright.classList.remove("hiden");
  navright.classList.add("showflex");

  jssearch.classList.add("hiden");
  jssearch.classList.remove("showlist");
});
////////////////////////////////////js search(end)

////////////////////////////////////js search sm(first)
let jssearch2 = document.querySelector(".jssearch2");
let jssearch3 = document.querySelector(".jssearch3");
let ifirst1 = document.querySelector(".ifirst1");
let ifirst2 = document.querySelector(".ifirst2");
let ifirst3 = document.querySelector(".ifirst3");
let ifirst4 = document.querySelector(".ifirst4");
let ifirst5 = document.querySelector(".ifirst5");
let canceli = document.querySelector(".canceli");

jssearch2.addEventListener("click", function () {
  ifirst1.classList.add("hidden");
  ifirst2.classList.add("hidden");
  ifirst3.classList.add("hidden");
  ifirst4.classList.add("hidden");
  ifirst5.classList.add("hidden");

  jssearch3.classList.remove("hidden");
  jssearch3.classList.add("showlist");
});

canceli.addEventListener("click", function () {
  console.log("helo");
  
  jssearch3.classList.remove("showlist");
  jssearch3.classList.add("hidden");

  ifirst1.classList.remove("hidden");
  ifirst2.classList.remove("hidden");
  ifirst3.classList.remove("hidden");
  ifirst4.classList.remove("hidden");
  ifirst5.classList.remove("hidden");
});
////////////////////////////////////js search sm(end)
var swiper = new Swiper(".mySwiper", {
  rewind: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets", // دایره‌ها
  },
});

var swiper = new Swiper(".mySwiper", {
  loop: true, 
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    slideChange: function () {
      document.querySelectorAll("#custom-pagination .bullet").forEach((b, i) => {
        b.classList.toggle("active", i === swiper.realIndex);
      });
    },
  },
});

const toggleBtn = document.getElementById("toggle-autoplay");

toggleBtn.addEventListener("click", () => {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();      
    toggleBtn.textContent = "▶";
  } else {
    swiper.autoplay.start();    
    toggleBtn.textContent = "⏸";
  }
});
////////////////////////////////////////////////// slide <lg
document.addEventListener("DOMContentLoaded", function () {

  // ساخت اسلایدر
  const swiper = new Swiper(".customSwiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  // دکمه بعدی
  document.querySelector(".custom-next")
    .addEventListener("click", () => {
      swiper.slideNext();
    });

  // دکمه قبلی
  document.querySelector(".custom-prev")
    .addEventListener("click", () => {
      swiper.slidePrev();
    });

  // توقف / پخش
  const toggleBtn = document.querySelector(".custom-toggle");
  toggleBtn.addEventListener("click", () => {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      toggleBtn.textContent = "▶";
    } else {
      swiper.autoplay.start();
      toggleBtn.textContent = "⏸";
    }
  });

  // دایره‌ها
  const bullets = document.querySelectorAll(".custom-bullet");

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      swiper.slideToLoop(index);
    });
  });

  // سینک شدن دایره‌ها با اسلاید
  swiper.on("slideChange", () => {
    bullets.forEach((b, i) => {
      b.classList.toggle("active", i === swiper.realIndex);
    });
  });

});
/////warring
let delet=document.querySelector(".delet");
let delet1=document.querySelector(".delet1");
let delet2=document.querySelector(".delet2");
let warring=document.querySelector(".warring");
delet.addEventListener("click",function(){
warring.classList.add("hidden")
}) 
delet1.addEventListener("click",function(){
warring.classList.add("hidden")
}) 
delet2.addEventListener("click",function(){
warring.classList.add("hidden")
}) 


if (window.matchMedia("(min-width: 1024px)").matches) {
  setTimeout(function () {
    warring.classList.remove("hidden");
  }, 2000);
}
  const backToTop = document.getElementById("backToTop");
  const footer = document.getElementById("footer");

  function isDesktop() {
    return window.innerWidth >= 768; // md در Tailwind
  }

  function showBtn() {
    backToTop.classList.remove("opacity-0", "pointer-events-none");
    backToTop.classList.add("opacity-100");
  }

  function hideBtn() {
    backToTop.classList.add("opacity-0", "pointer-events-none");
    backToTop.classList.remove("opacity-100");
  }

  window.addEventListener("scroll", () => {
    if (!isDesktop()) return;

    if (window.scrollY > 60) {
      showBtn();
    } else {
      hideBtn();
    }

    let footerTop = footer.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
      backToTop.style.bottom = "120px";
    } else {
      backToTop.style.bottom = "30%";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

