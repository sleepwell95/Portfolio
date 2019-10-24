var parallax1 = document.getElementById("section1");

window.addEventListener("scroll", function() {
  var offset = window.pageYOffset;

  parallax1.style.backgroundPositionY = offset * 0.7 + "px";
});
