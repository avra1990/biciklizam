function initMap() {
  const google = window.google;
  const lokacijaA = new google.maps.LatLng(43.92469, 21.036381);
  const lokacijaB = new google.maps.LatLng(43.959608, 21.246055);

  const map = new google.maps.Map(document.getElementById('mapaID'), {
    zoom: 10,
    center: lokacijaA
  });

  const markerA = new google.maps.Marker({
    position: lokacijaA,
    title: 'Marker',
    label: 'M',
    map
  });
  const markerB = new google.maps.Marker({
    position: lokacijaB,
    title: 'Marker B',
    label: 'B',
    map
  });
}

export { initMap };
