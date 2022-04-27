const bgList = ['bg01.jpg','bg03.jpg','bg04.jpg','bg05.jpg'];
const bodyStyle = document.body.style;
const bgListLength = Math.random() * bgList.length;
const bgRandom = bgList[Math.floor(bgListLength)];

bodyStyle.background = `url('../img/${bgRandom}') center/cover no-repeat`;
bodyStyle.backgroundAttachment = `fixed`;
