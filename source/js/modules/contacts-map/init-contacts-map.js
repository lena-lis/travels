import L from '../../vendor/leaflet';

const initContactsMap = () => {
  const contactsMap = document.querySelector('[data-contacts-map]');

  if (!contactsMap) {
    return;
  }

  contactsMap.replaceChildren();

  const map = L.map(contactsMap, {
    center: [55.7748763, 37.6326415],
    zoom: 13,
    scrollWheelZoom: false,
    dragging: false,
    keyboard: false,
  });

  const tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
  tile.addTo(map);

  const customIcon = L.icon({
    iconUrl: './img/svg/map-pin.svg',
    iconSize: [48, 48],
  });

  const marker = L.marker([55.7748763, 37.6326415], {icon: customIcon}).bindPopup('г. Москва, пр-т Мира, д. 14, офис 101');
  marker.addTo(map);

  const resizeObserver = new ResizeObserver(() => {
    map.invalidateSize();
  });

  resizeObserver.observe(contactsMap);
};

export {initContactsMap};
