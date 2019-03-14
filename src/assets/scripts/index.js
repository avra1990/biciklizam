import 'bootstrap';
import { toggleShrink, myClick } from './nav';
import { carousel } from './carousel';

require('webpack-icons-installer');

require('../styles/index.scss');

window.onscroll = function() {
  toggleShrink();
};

window.myClick = function() {
  myClick();
};

window.carousel = function() {
  carousel();
};
