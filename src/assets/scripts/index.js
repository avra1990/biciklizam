import 'bootstrap';
import { toggleShrink, myClick } from './nav';
import { gallery } from './klase';
require(['./lightgallery.js'], function() {
  require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
      lightGallery(document.getElementById('lightgallery')); 
  });
});  

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
