const listBox = document.querySelector('.list-box');
const list = listBox.querySelector('.list');
const firstList = document.querySelector('.list:first-child');
const listWidth = list.offsetWidth;
const listLength = list.length;
const totalWidth = listWidth * listLength;

let mleft = 0;

function move(){
    mleft -= 2;
    if(mleft < -listWidth){
        listBox.appendChild(firstList);
        mleft = 0;
    }


}


function RollingBanner(){
    let timer = setInterval()

}