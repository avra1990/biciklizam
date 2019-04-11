import 'bootstrap';
import toggleShrink from './nav';
// import carousel from './carousel';
import { initMap, marker, isprazniTabelu } from './mapa';

import '../styles/index.scss';

require('webpack-icons-installer');

window.onscroll = function() {
  toggleShrink();
};

window.initMap = function() {
  initMap();
};

window.marker = function() {
  marker();
};

window.isprazniTabelu = function() {
  isprazniTabelu();
};

/*
window.carousel = function() {
  carousel();
};
*/
