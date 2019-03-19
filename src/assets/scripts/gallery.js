import { domainToASCII } from 'url';

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

let slideIndex = 1;
showSlide(slideIndex);

function dodajSlide(n) {
  showSlide((slideIndex += n));
}

function trenSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide() {
  let i;
  const slides = document.getElementById('mojSlide');
  const tacke = document.getElementsByClassName('demo');
  const skrivenText = document.getElementById('skriveno');
  if (n > slides.lenght) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.lenght;
  }
  for (i = 0; i < slide.lenght; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < tacke.length; i++) {
    tacke[i].className = tacke[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  tacke[slideIndex - 1].className += 'active';
  skrivenText.innerHTML = tacke[slideIndex - 1].alt;
}

export { openModal, closeModal, dodajSlide, trenSlide, showSlide };
