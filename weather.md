# Weather API

### 구현기능
1️⃣ 현재 사용자의 위치를 알아낸다.(위도&경도)

2️⃣ 위도&경도를 이용해 장소와 날씨를 알려주는 서비스를 이용한다.

<br>

## ```navigator.geolocation.getCurrentPosition()```
현재 위치를 알아 낸다.

<br>

> weather.js
```javascript
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    consoel.log(`현재 위치는 경도: ${lat}` 위도: ${lon} 이다.) // 현재 위치는 경도: 35.094528 위도: 128.9781248 이다
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

```
- ```geolocation.getCurrentPosition()``` 메서드는 장치의 현재 위치를 가져온다.
- ```navigator.geolocation.getCurrentPosition(success, error) ``` 
   - ```success``` : 다 잘됐을 때, 실행할 함수 / GeolocationPosition 객체를 매개변수로 받아서 실행한다.  
   - ```error``` : 에러가 발생했을 때, 실행할 함수 

[자세히](https://github.com/ahn-sujin/TIL/blob/main/javascript/geolacation.md)

<br>


## weather API
**weather api**를 사용하여 위도,경도 정보를 그에 맞는 장소로 바꿔준다. 

<br> 

> weather.js
```javascript
const API_KEY = `5d5741c09fde22378b676be4c5e10c76`;

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
- ```fetch()``` 
   - 백앤드로부터 데이터를 받아오기 위해, api를 호출하고 데이터를 응답받기 위해 사용하는 함수이다.
   - ```fetch()```함수는 ```promise```로 당장 일어나지 않고 시간이 걸린 뒤에 발생한다.
- ```fetch()``` 함수 기본
```javascript
fetch('api 주소')
  .then(res => res.json())
  .then(res => {
    // data를 응답 받은 후의 로직
  });

```
