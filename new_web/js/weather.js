const API_KEY = "9f7bff5dc33349bd120445c227716735";
const tem = document.querySelector("#temp");
const pla = document.querySelector("#place");

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const place = data.name;
            tem.innerText = place;
            pla.innerText = `${temp}°`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);