
const rollerWrap = document.querySelector('.wrap');
const roller = document.querySelector('.roller');
roller.id = 'roller1';
const clone = roller.cloneNode(true);
clone.id = 'roller2';
rollerWrap.appendChild(clone);
const originalRoller = document.querySelector('#roller1')
const cloneRoller = document.querySelector('#roller2')
const rollerWidth = document.querySelector('.roller ul').offsetWidth;
originalRoller.style.left = '0px';
cloneRoller.style.left = rollerWidth + 'px';

let BETWEEN_DISTANCE = 1;

function betweenRollCallback(distance, item) {
    const location = parseInt(item.style.left);
    item.style.left = (location - distance) + 'px';
    if (rollerWidth + (location - distance) <= 0) {
        item.style.left = rollerWidth + 'px';
    }
}

setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, originalRoller);
setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, cloneRoller);
