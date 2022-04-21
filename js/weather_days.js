
const forecast = document.querySelector('#forecast');
const DAY_API_KEY = `5d5741c09fde22378b676be4c5e10c76`;

function onDayGeoOk(position){
    const lat = position.coords.latitude; //경도
    const lon = position.coords.longitude; //위도
    const dayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${DAY_API_KEY}&units=metric`
    console.log(dayUrl);
    fetch(dayUrl)
        .then((response) => response.json())
        .then((data) => {
            let fday = "";
			data.daily.forEach((value, index) => {
				if (index > 0) {
					const dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					const icon = value.weather[0].icon;
					const temp = value.temp.day.toFixed(0);
					fday = `<div class="forecast-day">
						<p>${dayname}</p>
						<p><span class="ico-${icon}" title="${icon}"></span></p>
						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
					</div>`;
                    forecast.innerHTML = fday;
					// forecast[0].insertAdjacentHTML('beforeend', fday);
				}
			});
        })
}

function onDayGeoError(){
    alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onDayGeoOk, onDayGeoError);