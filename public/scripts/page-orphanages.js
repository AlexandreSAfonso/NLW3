//create object map
var map = L.map('mapid').setView([-22.569287,-47.4202659,], 15);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "../public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2] 
})
//create poupup overlay
const popup = L.popup({
    clouseButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('lar das Meninas <a href="orphanage.html?id=1" class="chose-orphanage"> <img src="./public/images/arrow-white.svb"</a>')

//create and add marker
/*L.marker([-22.569287,-47.4202659,]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();*/
L.marker([-22.569287,-47.4202659,], {icon})
    .addTo(map)
    .bindPopup(popup)