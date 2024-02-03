function changeBackgroundColor(color) {
  document.querySelector(".helloo").style.backgroundColor = color;
}

// loader starts here
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
// loader ends here
