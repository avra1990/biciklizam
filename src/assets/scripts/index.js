import 'bootstrap';
import toggleShrink from './nav';
// import carousel from './carousel';
import { initMap } from './mapa';

import '../styles/index.scss';

require('webpack-icons-installer');

window.onscroll = function() {
  toggleShrink();
};

window.initMap = initMap();
