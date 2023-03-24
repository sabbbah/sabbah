const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

const days = [
  "الأحد",
  "الأثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
let monthes = [
  "يناير",
  "فبراير",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

document.getElementById("year").innerHTML = year;
document.getElementById("day").innerHTML = days[day];
document.getElementById("month").innerHTML = monthes[month];

document.getElementById("footer_year").innerHTML = year;

const navbar = document.querySelector(".navbar");
let links = document.querySelectorAll(".nav-link");

window.onscroll = function () {
  if (window.scrollY >= 70 || window.pageYOffset >= 70) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.641)";
    // navbar.style.backgroundColor = "#039be5";
    links.forEach((link) => {
      link.style = "color: #222 !important";
    });
  }
   else {
    navbar.style.backgroundColor = "transparent";
    // links.forEach((link) => {
    //   link.style = "color: #fff !important";
    // });
  }
};
