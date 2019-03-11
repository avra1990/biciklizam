import jquery from 'jquery';
import { toggleShrink, myClick } from './nav';
import { gallery } from './klase';

require('../styles/index.scss');

jquery(() => {
  console.log('Hello jQuery + bootstrap 4!');
});

window.onscroll = function() {
  toggleShrink();
};

window.myClick = function() {
  myClick();
};

window.gallery = function() {
  gallery();
};
