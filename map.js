var map = L.map('mapid').setView([59.8941401, 10.7296017], 15.4);
import { events } from '/assets/data/events'
 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 1, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 16,
  minZoom: 13,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoiam9yZHlwZXJlaXJhIiwiYSI6ImNrb3IwOWRvdzB5Y3AybnN6cGlnbTVmdzUifQ.JeTpr6XvhG_NK2afZOz0ag'
}).addTo(map);

L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

var myIcon = L.icon({
  iconUrl: '/assets/images/concert.png',
  iconSize: [38, 52],
  iconAnchor: [19, 52],
  popupAnchor: [0, -52],
  tooltipAnchor: [19, -26],
});

function getEventText ({id, day, hour, hour2, minute = '00'}) {
  let text = `Konsert ${id}<br> ${day}. juli<br> ${hour}:${minute}`

  if (hour2) {
    text = text.concat(`<br> ${hour2}:${minute}`)
  }

  return text
}

events.forEach((e) => {
  const eventText = getEventText(e)
  var tempMarker = L.marker(e.points, {
    riseOnHover: true,
    icon: myIcon
  }).addTo(map);
  tempMarker.bindTooltip(eventText);
  tempMarker.bindPopup(eventText);
})