const API_KEY = `5d5741c09fde22378b676be4c5e10c76`;

function getWeatherCurrent(url){
    const weather = document.querySelector('#weather');
    const city = weather.querySelector('.city');
    const temp = weather.querySelector('.temp');
    const condition = weather.querySelector('.condition');
    const conditionIcon = condition.style;
    const highestTemp = weather.querySelector('.highest-temp');
    const minimumTemp = weather.querySelector('.minimum-temp');

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const icon = data.weather[0].icon;
            const ICON_URL = `http://openweathermap.org/img/wn/${icon}.png`;
            city.innerText = data.name;
            temp.innerText = Math.floor(data.main.temp);
            condition.innerText = data.weather[0].main;
            conditionIcon.background = `url(${ICON_URL}) no-repeat right center `; 
            highestTemp.innerText = Math.floor(data.main.temp_max);
            minimumTemp.innerText = Math.floor(data.main.temp_min);
        })
}

function getWeatherForcast(url){
    const forecast = document.querySelector('#forecast');
    const today = new Date();
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const forecastData = data.daily;

            for(i = 0; i < forecastData.length; i++){
                const list = document.createElement("li");
                const date = document.createElement("span");
                const icon = document.createElement("img");
                const temp = document.createElement("span");

                list.classList.add('forecast-list');
                date.classList.add('date');
                icon.classList.add('icon');
                temp.classList.add('temp');

                forecast.appendChild(list);
                list.appendChild(date);
                list.appendChild(icon);
                list.appendChild(temp);

                today.setDate(today.getDate() + 1);
                const weekNumber = today.getDay();
                const weekName = ['일','월','화','수','목','금','토']

                date.innerText = weekName[weekNumber];
                icon.src = `http://openweathermap.org/img/wn/${forecastData[i].weather[0].icon}.png`;
                temp.innerText = `${forecastData[i].temp.min.toFixed()}°/${forecastData[i].temp.max.toFixed()}°`;
            }
        })
}   

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const WEATHER_URL =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${API_KEY}&units=metric`

    getWeatherCurrent(WEATHER_URL);
    getWeatherForcast(FORECAST_URL);
    
    // console.log(`${lat} ${lon}`);
    // console.log(WEATHER_URL);
    // console.log(FORECAST_URL);
}

function onGeoError(){
    alert('위치를 찾을 수 없습니다.')    
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);