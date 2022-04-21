const API_KEY = `5d5741c09fde22378b676be4c5e10c76`;

function getWeatherCurrent(url){
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather');
            const city = weather.querySelector('.city');
            const temp = weather.querySelector('.temp');
            const condition = weather.querySelector('.condition');
            const conditionStyle = condition.style;
            const highestTemp = weather.querySelector('.highest-temp');
            const minimumTemp = weather.querySelector('.minimum-temp');

            const ICON_URL = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

            city.innerText = data.name;
            temp.innerText = Math.floor(data.main.temp);
            condition.innerText = data.weather[0].description;
            conditionStyle.background = `url(${ICON_URL}) no-repeat right -7px`;
            highestTemp.innerText = Math.floor(data.main.temp_max);
            minimumTemp.innerText = Math.floor(data.main.temp_min);
        })
}

function getWeatherForecast(url){
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const forecast = document.querySelectorAll('.forecast-list');
            const today = new Date();
            const forecastData = data.daily;

            for(i = 0; i < forecastData.length; i++){
                const forecastBox = forecast[i];
                const dateBox = forecastBox.querySelector(".date");
                const iconBox = forecastBox.querySelector(".icon");
                const tempBox = forecastBox.querySelector(".temp");
                const mainBox = forecastBox.querySelector(".main");

                const date = document.createElement("span");
                const icon = document.createElement("img");
                const temp = document.createElement("span");
                const main = document.createElement("span");

                today.setDate(today.getDate() + 1);
                date.innerText = `${today.getMonth() + 1}/${today.getDate()}`;
                icon.src = `http://openweathermap.org/img/wn/${forecastData[i].weather[0].icon}.png`;
                temp.innerText = `${forecastData[i].temp.min.toFixed()}°/${forecastData[i].temp.max.toFixed()}°`;
                main.innerText = `${forecastData[i].weather[0].main}`;

                dateBox.appendChild(date);
                iconBox.appendChild(icon);
                tempBox.appendChild(temp);
                mainBox.appendChild(main);

            }
        })
}

function onGeoOk(position){
    const lat = position.coords.latitude; //경도
    const lon = position.coords.longitude; //위도
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${API_KEY}&units=metric`
    
//    console.log(currentUrl)

    getWeatherCurrent(currentUrl);
    getWeatherForecast(forecastUrl);
}

function onGeoError(position){
    alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);