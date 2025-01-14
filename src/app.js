import L from 'leaflet';

if (document.getElementById('map1')) {
    var map1 = L.map('map1').setView([37.77642012084717, -3.790251845748044], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map1);
    
    L.marker([37.765179291776974, -3.789838117294039]).addTo(map1)
        .bindPopup('Catedral de Jaén.')
        .openPopup();
}

if (document.getElementById('map2')) {
    var map2 = L.map('map2').setView([37.77642012084717, -3.790251845748044], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map2);

    L.marker([37.76753411229774, -3.799934082042829]).addTo(map2)
        .bindPopup('Castillo de Santa Catalina.')
        .openPopup();
}

if (document.getElementById('map3')) {
    var map3 = L.map('map3').setView([37.77642012084717, -3.790251845748044], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map3);

    L.marker([37.77109070341262, -3.7940635661895232]).addTo(map3)
        .bindPopup('Baños Árabes.')
        .openPopup();
}



    const image = document.getElementById("landscape")

    
    function makeLighter(event) {
        event.target.style.opacity = "0.8";
    }

    function makeNormal(event) {
        event.target.style.opacity = "1";
    }

    
    function hovereffect (image) {
        image.addEventListener("mouseover", makeLighter);
        image.addEventListener("mouseout", makeNormal);
    };

    hovereffect(image);
