
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

// roller.classList.add('original');
// clone.classList.add('clone');

let BETWEEN_DISTANCE = 1;

let originalRolling = setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, originalRoller);
let cloneRolling =  setInterval(betweenRollCallback, 10, BETWEEN_DISTANCE, cloneRoller);

function betweenRollCallback(distance, item) {
    const location = parseInt(item.style.left);
    item.style.left = (location - distance) + 'px';
    if (rollerWidth + (location - distance) <= 0) {
        item.style.left = `${rollerWidth}px`;
    }
}

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