import 'bootstrap';
import { toggleShrink } from './nav';
import { carousel } from './carousel';
import { openModal, closeModal, dodajSlide, trenSlide, showSlide } from './gallery';

require('webpack-icons-installer');

require('../styles/index.scss');

window.onscroll = function() {
  toggleShrink();
};

window.carousel = function() {
  carousel();
};

window.openModal = function() {
  openModal();
};

window.closeModal = function() {
  closeModal();
};

window.dodajSlide = function() {
  dodajSlide();
};

window.trenSlide = function() {
  trenSlide();
};

window.showSlide = function() {
  showSlide();
};
