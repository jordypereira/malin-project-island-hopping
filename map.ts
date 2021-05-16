import L from 'leaflet'


var map = L.map('mapid').setView([59.88329,10.7097532], 14.1);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 1, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 15,
//   minZoom: 1,
//   id: 'jordypereira/ckor0axk3588317le3ojli8tx',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: 'pk.eyJ1Ijoiam9yZHlwZXJlaXJhIiwiYSI6ImNrb3IwOWRvdzB5Y3AybnN6cGlnbTVmdzUifQ.JeTpr6XvhG_NK2afZOz0ag'
// }).addTo(map);

setTimeout(() => map.invalidateSize(), 100)

var myIcon = L.icon({
    iconUrl: '/assets/images/concert.png',
    iconSize: [38, 52],
    iconAnchor: [19, 52],
    popupAnchor: [0, -52],
});

// var marker1 = L.marker([10.725987, 59.883048], {
//   riseOnHover: true,
//   icon: myIcon
// }).addTo(map);
// marker1.bindPopup("Hornhuset<br> Great beer", {autoClose: false}).openPopup();

// var marker2 = L.marker([59.318062,18.054688], {
//   riseOnHover: true,
//   icon: myIcon
// }).addTo(map);
// marker2.bindPopup("Häktet<br> Party all night", { autoClose: false }).openPopup();

// var marker3 = L.marker([59.314437,18.066313], {
//   riseOnHover: true,
//   icon: myIcon
// }).addTo(map);
// marker3.bindPopup("Hellströms<br> Cheapest beer in town", {autoClose: false}).openPopup();