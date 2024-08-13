let id;
let target;
let options;

const displayDataDiv = document.getElementById("DisplayData")

function success(pos) {
  const crd = pos.coords;

  //displayDataDiv.innerHTML = JSON.stringify(pos)

  displayDataDiv.innerHTML = `Timestamp: ${pos.timestamp}<br><br>
                              Coords<br>
                              Range: ${pos.coords.accuracy.toFixed(2)} meters<br>
                              Latitude: ${pos.coords.latitude}<br>
                              Longtitude ${pos.coords.longitude}<br>
                              Speed: ${pos.coords.speed != null ? pos.coords.speed.toFixed(2) * 3.6 : 0}km/h`
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

options = {
  enableHighAccuracy: true
};

id = navigator.geolocation.watchPosition(success, error, options);
