const parallax1 = document.getElementById("section1");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax1.style.backgroundPositionY = offset * 0.5 + "px";
});
