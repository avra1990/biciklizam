import 'bootstrap';
import '../styles/index.scss';
import toggleShrink from './nav';
// import carousel from './carousel';
// import { initMap } from './mapa';


require('webpack-icons-installer');

window.onscroll = function() {
  toggleShrink();
};

// window.initMap = initMap();
