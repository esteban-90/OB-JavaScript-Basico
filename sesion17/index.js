let map, marker;

function initMap() {
  const positionGrandCanyon = { lat: 36.102466906009646, lng: -112.11145466271986 };
  const positionMarianaTrench = { lat: 11.951093316390615, lng: 142.37371788318157 };
  const positionEasterIsland = { lat: -27.10732189730923, lng: -109.35048957928396 };

  const mapElement = document.getElementById("map");

  map = new google.maps.Map(mapElement, {
    zoom: 4,
    center: positionGrandCanyon,
  });

  marker = new google.maps.Marker({
    positionGrandCanyon,
    map,
    title: "Gran Cañón",
  });

  marker = new google.maps.Marker({
    positionMarianaTrench,
    map,
    title: "Fosa de las Marianas",
  });

  marker = new google.maps.Marker({
    positionEasterIsland,
    map,
    title: "Isla de Pascua",
  });

  // getPosition();
}

// function getPosition() {
//   const location = navigator.geolocation;

//   if (location) {
//     location.watchPosition(centerMap, displayError, { timeout: 60_000 });
//   } else {
//     alert("Tu navegador no admite geolocalización");
//   }
// }

// function centerMap(position) {
//   const newPosition = { lat: position.coords.latitude, lng: position.coords.longitude };

//   map.setCenter(newPosition);
//   marker.setPosition(newPosition);
// }

// function displayError(exception) {
//   console.log("Se ha producido un error");
//   console.error(exception.message);
// }
