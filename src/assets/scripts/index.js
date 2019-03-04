import jquery from 'jquery';
import { toggleShrink, myClick } from './nav';
import { strana_1 } from './klase';

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

window.strana_1 = function() {
  strana_1();
};
