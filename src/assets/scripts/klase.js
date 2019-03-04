function strana_1() {
  const tekst = 'Bicikleto.';
  document.getElementById('onamaID').innerHTML = tekst;
}

window.strana_1 = function() {
  strana_1();
};
