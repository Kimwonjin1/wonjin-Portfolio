const navSlide = () => {
  const navicon = document.querySelector(".nav-icon");
  const nav = document.querySelector(".nav-links");
  const navbar = document.querySelector("nav")
  const navLinks = document.querySelectorAll(".nav-links li");

  navicon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    navicon.classList.toggle("toggle");
  });

  var lastScrollTop = 0;
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
      navbar.style.top = "-80px"
    }else{
      navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
  })
};

navSlide();
