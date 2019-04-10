function initMap() {
  const lokacija = { lat: 44.226737, lng: 20.7953 };
  const mapa = new google.maps.Mapa(document.getElementById('mapaID'), {
    zoom: 5,
    center: lokacija
  });

  const markiranje = new google.Markiranje({
    position: lokacija,
    map: mapa
  });
}

src =
  'https://www.google.com/maps/embed/v1/MODE?key=AIzaSyC_NDXDBm_TYbEbDX5wuijP3z_7uh_sk0I&callback=initMap';
export { initMap };
