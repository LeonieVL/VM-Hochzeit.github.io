// initialize map
const map = L.map("map").setView([50.11790936293937, 8.470471881793772], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const iconParty = L.icon({
    iconUrl: 'images/Sektgläser1.svg',
    iconSize: [45, 95] // size of the icon
});

const iconWedding = L.icon({
    iconUrl: 'images/Ringe1.svg',
    iconSize: [45, 120] // size of the icon
});

const iconMarker = L.icon({
    iconUrl: 'images/Hotel.svg',
    iconSize: [35, 75] // size of the icon
});



//var marker = L.marker([50.1002859397645, 8.55234678431836], {icon: iconWedding}).addTo(map).bindPopup('Die Trauung beginnt um 15.00 Uhr.').openPopup();

var marker = L.marker([50.1271650003165, 8.4633358105422], {icon: iconMarker}).addTo(map).bindPopup('<a href="https://www.zumgoldenenloewen.de/">Zum goldenen Löwen</a>').openPopup();

var marker = L.marker([50.147029217018165, 8.499967857671821], {icon: iconMarker}).addTo(map).bindPopup('<a href="https://www.h-hotels.com/">H-Hotel Bad Soden</a>').openPopup();

var marker = L.marker([50.117468118723444, 8.470456859867816], {icon: iconParty}).addTo(map).bindPopup('Die Feier beginnt um 17.00 Uhr im Holzapfel.').openPopup();

//var marker = L.marker([50.1271650003165, 8.4633358105422], {icon: iconMarker}).addTo(map).bindPopup('<a href="https://www.zumgoldenenloewen.de/">Zum goldenen Löwen</a>').openPopup();


//Wedding website RSVP
//https://www.youtube.com/watch?v=E4VM6M8WDHE

//add dietary requirements

//https://codepen.io/fkkcloud/pen/rKyNQL
//https://formbold.com/templates/rsvp-form