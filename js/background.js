const bgList = ['bg01.jpg','bg02.jpg','bg03.jpg','bg04.jpg','bg05.jpg']

const bgListLength = Math.random() * bgList.length; 
const bgRandom = bgList[Math.floor(bgListLength)];

const bgImage = document.createElement('img');
bgImage.src = `/img/${bgRandom}`;

document.body.appendChild(bgImage);