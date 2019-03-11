import 'bootstrap';
import { toggleShrink, myClick } from './nav';
import { gallery } from './klase';

require('../styles/index.scss');

window.onscroll = function() {
  toggleShrink();
};

window.myClick = function() {
  myClick();
};

window.gallery = function() {
  gallery();
};
