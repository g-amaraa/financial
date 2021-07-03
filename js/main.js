let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.861609, lng: 106.762158 },
    zoom: 8,
  });
}
