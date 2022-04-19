const clock = document.querySelector('#clock');
const day = document.querySelector('#day');
const date = document.querySelector('#date');
const DATE = new Date();

function getClock(){
    const hours = String(DATE.getHours()).padStart(2,0);
    const minutes = String(DATE.getMinutes()).padStart(2,0);
    const seconds = String(DATE.getSeconds()).padStart(2,0);

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

function getDayOfTheWeek(){
    const weekNumber = DATE.getDay();
    const weekName = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    day.innerText = `${weekName[weekNumber]}`;
}

function getDate(){
    const todayDate = String(DATE.getDate()).padStart(2,0);
    date.innerText = `${todayDate}`
}

getClock(); 
getDayOfTheWeek();
getDate();
setInterval(getClock,1000);

