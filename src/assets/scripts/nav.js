function toggleShrink() {
  const scrollPos = window.scrollY;
  const navbar = document.querySelector('nav.navbar-custom');
  const navbarHeight = navbar.offsetHeight;
  if (scrollPos >= navbarHeight) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
}

function myClick() {
  alert('Sav js je u folderu assets/scripts/');
};

export { toggleShrink, myClick };
