function initMap(myLat, myLon) {
    const myLatLng = { lat: myLat, lng: myLon };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}
window.initMap = initMap;

function getPosition(country) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://nominatim.openstreetmap.org/search?format=json&q=${country}`)
    xhr.send();
    xhr.addEventListener('load', function () {
        var data = JSON.parse(xhr.response);
        console.log(data);
        var lat = Number(data[0].lat);
        var lon = Number(data[0].lon);
        initMap(lat, lon)
    });

}

var country = document.getElementById('countries');
window.addEventListener('load',function () {
    var defaultcountry=country.options[0].value;
    getPosition(defaultcountry.toUpperCase()); 
});


country.addEventListener('change', function () {
    var selectedCountry = country.value; 
    getPosition(selectedCountry.toUpperCase()); 
});


