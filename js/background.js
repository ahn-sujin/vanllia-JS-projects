const bgPosition = document.querySelector('.contents')
const bgList = ['app_bg01.png','app_bg02.png'];

const bgListLength = Math.random() * bgList.length;
const bgRandom = bgList[Math.floor(bgListLength)];

const bgImage = document.createElement('img');
bgImage.src = `/img/${bgRandom}`;

bgPosition.appendChild(bgImage);