# Weather API

### 구현기능
1️⃣ 현재 사용자의 위치를 알아낸다.(위도&경도)

2️⃣ 위도&경도를 이용해 장소와 날씨를 알려주는 서비스를 이용한다.

<br>

## ```Navigator.geolocation```
```Navigator.geolocation``` 는 웹에서 장치의 위치를 알아 낼때 사용한다. 

<br>

> weather.js
```javascript
function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather span:first-child')
            const weather = document.querySelector('#weather span:last-child')
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

```






<br>


## weather API


