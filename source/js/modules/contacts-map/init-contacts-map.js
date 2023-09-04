import L from '../../vendor/leaflet';

const mapContainer = document.querySelector('[data-contacts-map]');

const initContactsMap = () =>  {
  if (!mapContainer) {
    return;
  }

  mapContainer.replaceChildren();

  const map = L.map(mapContainer, {
    center: [55.7748763, 37.6326415],
    zoom: 13,
    scrollWheelZoom: false,
    dragging: false,
    keyboard: false,
  });

  const tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  tile.addTo(map);

  const customIcon = L.icon({
    iconUrl: './img/svg/map-pin.svg',
    iconSize: [48, 48],
  });

  const marker = L.marker([59.9682871, 30.3176164], {icon: customIcon}).bindPopup('г. Москва, пр-т Мира, д. 14, офис 101');
  marker.addTo(map);
};

export {initContactsMap};
