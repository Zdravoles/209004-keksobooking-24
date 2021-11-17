import {getOfferMarkup} from './get-offers.js';

const MAP_LAT = '35.689';
const MAP_LNG = '139.692';
const MAP_ZOOM = 12;
const MAP_COORDS_COUNT = 5;
const addressInputFieldNode = document.querySelector('#address');

const map = L.map('map-canvas')
  .setView(
    [MAP_LAT, MAP_LNG], MAP_ZOOM,
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const normalPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mapUserLayer = L.layerGroup().addTo(map);
const mapFilterLayer = L.layerGroup().addTo(map);

const mapParserCoords = (aCoords) => `${aCoords.lat.toFixed(MAP_COORDS_COUNT)}, ${aCoords.lng.toFixed(MAP_COORDS_COUNT)}`;

const createUserMarker = () => {
  const mapMarker = L.marker(
    {
      lat: MAP_LAT,
      lng: MAP_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mapMarker.addTo(mapUserLayer);

  mapMarker.on('moveend', (evt) => {
    addressInputFieldNode.value = mapParserCoords(evt.target.getLatLng());
  });
};

createUserMarker();

const getMapInitCoords = () => {
  addressInputFieldNode.value = `${MAP_LAT}, ${MAP_LNG}`;
};

const setMapPoints = (aOffers,aCardTemplate) => {
  aOffers.forEach((value) => {
    const lat = value.location.lat;
    const lng = value.location.lng;
    const point = L.marker(
      {
        lat,
        lng,
      },
      {
        draggable: false,
        icon: normalPinIcon,
      },
    );
    point
      .addTo(mapFilterLayer)
      .bindPopup(getOfferMarkup(aCardTemplate,value));
  });
};

const mapClearFiltersLayer = () => mapFilterLayer.clearLayers();

const mapReset = () => {
  mapUserLayer.clearLayers();
  mapClearFiltersLayer();
  createUserMarker();
  getMapInitCoords();
};

export {map, getMapInitCoords, setMapPoints, mapReset, mapClearFiltersLayer};
