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
  enableHighAccuracy: true
};

id = navigator.geolocation.watchPosition(success, error, options);
