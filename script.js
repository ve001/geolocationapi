const permission = document.querySelector(".permission")
const results = document.querySelector(".results")

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    
    results.innerHTML = ` Latitude : ${crd.latitude}
    Longitude: ${crd.longitude}
    More or less ${crd.accuracy} meters`

    results.style.display = "block"
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  