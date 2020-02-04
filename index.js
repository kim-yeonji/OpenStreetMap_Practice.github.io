var map = L.map('map').setView([37.541035, 126.673927], 11);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xohfG4aabbcgQtIV88JC', {
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var house = L.circle([37.541035, 126.673927], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.3,
	radius: 800
}).addTo(map);

var seoulStation = L.circle([37.555296, 126.970650], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.3,
	radius: 800
}).addTo(map);

var latlngs = [
    [37.541035, 126.673927],
    [37.555296, 126.970650]
];

var polyline = L.polyline(latlngs, {
	color: 'red',
	opacity: 0.5,
	lineCap: 'round',
	weight: 4,
}).addTo(map);

house.bindPopup("우리집");
seoulStation.bindPopup("서울역");