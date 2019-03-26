function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

let slideIndex = 1;

function showSlide() {
  let i;
  const slides = document.getElementById('mojSlide');
  const tacke = document.getElementsByClassName('demo');
  const skrivenText = document.getElementById('skriveno');
  if (i > slides.lenght) {
    slideIndex = 1;
  }
  if (i < 1) {
    slideIndex = slides.lenght;
  }
  for (i = 0; i < slides.lenght; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < tacke.length; i += 1) {
    tacke[i].className = tacke[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  tacke[slideIndex - 1].className += 'active';
  skrivenText.innerHTML = tacke[slideIndex - 1].alt;
}

showSlide(slideIndex);

function dodajSlide(n) {
  showSlide((slideIndex += n));
}

function trenSlide(n) {
  showSlide((slideIndex = n));
}

export { openModal, closeModal, dodajSlide, trenSlide, showSlide };
