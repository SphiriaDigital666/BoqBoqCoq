// GitHub Repo : https://github.com/aryan-tayal/Mountains-Parallax
// Live Site : https://aryan-tayal.github.io/Mountains-Parallax/

const mountainLeft = document.querySelector("#mountain_left");
const mountainRight = document.querySelector("#mountain_right");
const cloud1 = document.querySelector("#clouds_1");
const cloud2 = document.querySelector("#clouds_2");
const text = document.querySelector("#text");
const man = document.querySelector("#man");

window.addEventListener("scroll", () => {
  let value = scrollY;
  mountainLeft.style.left = `-${value / 0.7}px`;
  cloud2.style.left = `-${value * 2}px`;
  mountainRight.style.left = `${value / 0.7}px`;
  cloud1.style.left = `${value * 2}px`;
  text.style.bottom = `-${value}px`;
  man.style.height = `${window.innerHeight - value}px`;
});

//////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var navBar = document.querySelector(".navbarr");
  var topOfNav = navBar.offsetTop;

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = navBar.offsetHeight + "px";
      navBar.classList.add("nav-when-fixed");
    } else {
      document.body.style.paddingTop = 0;
      navBar.classList.remove("nav-when-fixed");
    }
  }

  window.addEventListener("scroll", fixNav);
});
