import { tabela } from '../../../../find_a_route/src/assets/funkcije';

function initMap() {
  const lokacija = { lat: 44.226737, lng: 20.7953 };
  const map = new google.maps.Map(document.getElementById('mapaID'), {
    zoom: 5,
    center: lokacija
  });

  const marker = new google.Marker({
    position: lokacija,
    map
  });
}

function isprazniTabelu() {
  const redovi = document.getElementById('teloTabele');
  if (redovi) {
    while (redovi.hasChildNodes()) {
      redovi.removeChild(redovi.firstChild());
    }
  }
}

export { initMap, marker, isprazniTabelu };
