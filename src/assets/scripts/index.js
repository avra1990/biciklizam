import jquery from 'jquery';

require('../styles/index.scss');

jquery(() => {
  console.log('Hello jQuery + bootstrap 4!');
});

window.myFunction = function() {
  alert('Sav js je u folderu assets/scripts/');
};
