# [JS]흐르는 스타일의 무한 롤링 배너 만들기

무한 롤링 배너 종류 중 많은 아이템을 딜레이 없이 무한 회전시켜주는 스타일을 자바스크립트로 제작해보려 한다. 

![image](images/rollingbanner.gif)

<br>

[결과 보기](https://ahn-sujin.github.io/rolling_banner/html/index.html)


<br>

## 무한 롤링 배너의 동작 방식 이해하기

- 무한 롤링 배너를 만들기 위해서는 2개의 배너가 필요하다. 자바스크립트를 이용해 복제 배너를 더 만들어 붙인다. 
- 기본적으로 배너 길이가 뷰포트 너비보다 길어야 자연스러운 배너 롤링이 구현된다.
- **복제 배너**는 원본 배너가 바깥 영역으로 완전히 이동하면서 생기는 **뷰포트의 빈공간을 채워 들어오는 역할**을 한다.
- 실제로는 같은 데이터를 가진 배너 2개가 번갈아가면서 뷰포트를 채우면서 왼쪽으로 이동하는 것이지만, 실제 동작은 하나의 배너가 무한 롤링을 하는 것처럼 보이게 되는 것이다.

![image](images/rollingbanner.jpg)

<br>

## 구조잡기

> html

```html
<div class="container">
        <div class="rollingbanner">
            <div class="wrap">
                <div class="roller">
                    <ul>
                        <li>
                            <img src="../images/pick01.png" alt="pick01">
                        </li>
                        <li>
                            <img src="../images/pick02.png" alt="pick02">
                        </li>
                        <li>
                            <img src="../images/pick03.png" alt="pick03">
                        </li>
                        <li>
                            <img src="../images/pick04.png" alt="pick04">
                        </li>
                        <li>
                            <img src="../images/pick05.png" alt="pick05">
                        </li>
                        <li>
                            <img src="../images/pick06.png" alt="pick06">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

```

<br>

## 스타일 잡기

> css

```css
<!-- reset style -->
html, body{
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
ol,ul,li{
	list-style: none;
}

.rollingbanner {
	position: relative;
	width: 1200px;
	height: 600px;
	margin: 0 auto;
	overflow: hidden;
}
.roller{
	position: absolute;
	height: 100%;
}
.roller > ul{
	display: flex;
	padding: 0;
}
.roller > ul > li {
	padding-right: 30px;
}

```

<br>

## 클론 배너 생성

- 롤링 배너의 **복제본을 만들고**, 원본 배너와 복제 배너의 **위치**를 잡아준다.

<br>

> javascript

```javascript
const rollerWrap = document.querySelector('.wrap');
const roller = document.querySelector('.roller');
roller.id = 'roller1';
const clone = roller.cloneNode(true);
clone.id = 'roller2';
rollerWrap.appendChild(clone);

const originalRoller = document.querySelector('#roller1')
const cloneRoller = document.querySelector('#roller2')

const rollerWidth = document.querySelector('.roller ul').offsetWidth;

originalRoller.style.left = `0px`;
cloneRoller.style.left = `${rollerWidth}px`;

```
### cloneNode()
- 특정 **객체 요소를 복사**한다. (**true 설정 시 객체 포함된 자식까지 모두 복사**한다.)
- ```roller.cloneNode(true)``` 이를 통해 위에서 말했던 복제 배너를 생성할 수 있다. 
- 복제된 배너는 ```rollerWrap.appendChild(clone)``` 로 배너를 감싸고 있는 요소의 자식요소로 넣어준다.

### offsetWidth
- ```element.offsetWidth```는 margin을 제외한 padding값, border값까지 계산한 값을 가져온다.
- ```document.querySelector('.roller ul').offsetWidth```를 통해 배너가 보여지는 총 너비값을 구한다.
- 복제 배너의 ```left```값을 ```${rollerWidth}px```로 설정해주어 배너가 보여지지 않도록 해준다.

<br>

## 무한 루프 구현하기
- 원본 배너는 배너 너비만큼 왼쪽으로 이동해서 안보이게 되면 오른쪽 바깥 안보이는 위치로 이동한 후 다시 배너 너비 만큼 왼쪽으로 이동하도록 해준다.
- 복제 배너는 오른쪽 바깥에서 시작해서 배너 2개 너비만큼 왼쪽으로 이동하도록 해준다.

<br>

> javascript

```javascript
let BETWEEN_DISTANCE = 1; // 이동 속도(정수로 해야햠/ 어차피 픽셀 단위로만 이동하기 때문에)

let originalRolling = setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, originalRoller);
let cloneRolling =  setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, cloneRoller);

function betweenRollCallback(distance, item) {
    const location = parseInt(item.style.left);
    item.style.left = (location - distance) + 'px';
    if (rollerWidth + (location - distance) <= 0) {
        item.style.left = `${rollerWidth}px`;
    }
}

```
### setInterval()
- ```setInterval()``` 함수는 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용한다.
- ```setInterval(a, b, c, d)```
  - a : 실행할 함수
  - b : 반복 주기를 밀리초(ms)단위로 받는다. 
  - c : a함수에 넘어갈 인자
  - d : a함수에 넘어갈 인자
- ```betweenRollCallback``` 콜백함수의 역할
  - 배너의 ```left```값을 왼쪽으로 점점 이동 시킨다.➡```item.style.left = (location - distance) + 'px'```
  - 그리고 배너가 완전히 왼쪽 바깥으로 벗어나게 되면 ➡```if (rollerWidth + (location - distance) <= 0)``` 오른쪽 바깥쪽으로 위치를 옮겨준다.➡``` item.style.left = `${rollerWidth}px`;```


<br>

## mouserover시 롤링 정지 및 재시작
- 정해진 영역에 mouseover되면 롤링이 멈췄다가 mouseout되면 다시 롤링 될 수 있도록 한다.

<br>

> javascript

```javascript
function stopRolling(){
    clearInterval(originalRolling);
    clearInterval(cloneRolling);
}

function restartRolling(){
    originalRolling = setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, originalRoller);
    cloneRolling =  setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, cloneRoller);
}

roller.addEventListener('mouseover', stopRolling);
roller.addEventListener('mouseout', restartRolling);


```
### setInterval 중단/재시작 방법
- 1️⃣ setInterval()함수의 반환값을 변수에 할당하여 반복 시작
    
  ```let 변수 = setInterval(콜백함수, 시간);```
- 2️⃣ clearInterval(변수)로 반복 중단
    
  ```clearInterval(변수)```
- 3️⃣ setInterval()함수의 반환값을 변수에 재할당하여 재시작
    
  ```변수 = setInterval(콜백함수, 시간);```


<br>


## 💥문제점 - 오류

1️⃣ 처음 접속시 원본 배너와 복제본 배너가 겹쳐져서 보이는 현상이 나타남 (새로고침하면 없어짐)

2️⃣ 복제본 배너에 mouseover시 롤링이 멈추지 않음 ```EventListener```가 적용되지 않음


<br>

#### 참고
https://blogpack.tistory.com/1120

https://velog.io/@effort_jk/setInterval-clearInterval-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%A8%EC%88%98-%EB%B0%98%EB%B3%B5-%EC%A4%91%EB%8B%A8-%EC%9E%AC%EC%8B%9C%EC%9E%91



