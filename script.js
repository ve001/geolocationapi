let id;
let target;
let options;

const displayDataDiv = document.getElementById("DisplayData")

function success(pos) {
  const crd = pos.coords;

  displayDataDiv.innerHTML = JSON.stringify(pos)
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
