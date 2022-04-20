const weather = document.querySelector('#weather');
const city = weather.querySelector('.city');
const temp = weather.querySelector('.temp');
const condition = weather.querySelector('.condition');
const highestTemp = weather.querySelector('.highest-temp');
const minimumTemp = weather.querySelector('.minimum-temp');
const API_KEY = `5d5741c09fde22378b676be4c5e10c76`;

function onGeoOk(position){
    const lat = position.coords.latitude; //경도
    const lon = position.coords.longitude; //위도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            temp.innerText = data.main.temp;
            condition.innerText = data.weather[0].main;
            highestTemp.innerText = data.main.temp_max;
            minimumTemp.innerText = data.main.temp_min;
        })
}

function onGeoError(){
    alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);