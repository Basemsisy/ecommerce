window.addEventListener("DOMContentLoaded", function () {
  /**** SHOW MENU ****/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    if (toggleId && navId) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  /**** HIDE MENU ****/
  const navLink = document.querySelectorAll(".nav__link"),
    navMenu = document.getElementById("nav-menu");
  const linkAction = () => {
    navMenu.classList.remove("show");
  };
  navLink.forEach((link) => link.addEventListener("click", linkAction));

  /**** SCROLL TO SECTION ****/
  const sections = document.querySelectorAll("section[id]");

  function scrollToActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.add("active");
        // window.location.hash = sectionId;
      } else
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.remove("active");
    });
  }
  window.addEventListener("scroll", scrollToActive);

  /**** CHANGE COLOR HEADER ****/
  window.onscroll = () => {
    const nav = document.getElementById("header");
    if (this.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  };
});
