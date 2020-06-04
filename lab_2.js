fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=5e22fed1c8ed7c30c5a5ee7cdc8a9d80"
).then(function (response) {
  response.json().then(function (data) {
    console.log(data);
    document.getElementById("name_sity1").textContent = data.name;
    document.getElementById("gradys1").textContent = Math.round(
      data.main.temp - 273
    );
    document.getElementById("pogoda1").textContent =
      data.weather[0]["description"];
  });
});
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=5e22fed1c8ed7c30c5a5ee7cdc8a9d80"
).then(function (response) {
  response.json().then(function (data) {
    console.log(data);
    document.getElementById("name_sity2").textContent = data.name;
    document.getElementById("gradys2").textContent = Math.round(
      data.main.temp - 273
    );
    document.getElementById("pogoda2").textContent =
      data.weather[0]["description"];
  });
});
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=hamburg&appid=5e22fed1c8ed7c30c5a5ee7cdc8a9d80"
).then(function (response) {
  response.json().then(function (data) {
    console.log(data);
    document.getElementById("name_sity3").textContent = data.name;
    document.getElementById("gradys3").textContent = Math.round(
      data.main.temp - 273
    );
    document.getElementById("pogoda3").textContent =
      data.weather[0]["description"];
  });
});

function initMap() {
  var element = document.getElementById("map");
  var options = {
    zoom: 5,
    center: { lat: 50.4015715, lng: 29.9736565 },
  };
  var Map = new google.maps.Map(element, options);

  addMarker({
    coordinates: { lat: 50.4015715, lng: 29.9736565 },
    info: document.getElementById("data1"),
  });
  addMarker({
    coordinates: { lat: 49.2348739, lng: 28.3298946 },
    info: document.getElementById("data2"),
  });
  addMarker({
    coordinates: { lat: 53.5584898, lng: 9.7873967 },
    info: document.getElementById("data3"),
  });

  function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: Map,
    });
    //if(properties.info){
    var InfoWindow = new google.maps.InfoWindow({
      content: properties.info,
    });

    marker.addListener("click", function () {
      InfoWindow.open(Map, marker);
    });
    // }
  }
}
