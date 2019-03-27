import 'bootstrap';
import toggleShrink from './nav';
// import carousel from './carousel';
// import { openModal, closeModal, dodajSlide, trenSlide, showSlide } from './gallery';

import '../styles/index.scss';

require('webpack-icons-installer');

window.onscroll = function() {
  toggleShrink();
};

// window.carousel = function() {
//   carousel();
// };

// window.openModal = function() {
//   openModal();
// };

// window.closeModal = function() {
//   closeModal();
// };

// window.dodajSlide = function() {
//   dodajSlide();
// };

// window.trenSlide = function() {
//   trenSlide();
// };

// window.showSlide = function() {
//   showSlide();
// };
