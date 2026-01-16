function reveal() {
  var reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
// Sofort prüfen, falls man schon auf der Seite ist
reveal();