# QUOTES AND BACKGROUND


### 구현기능
명언과 배경사진을 랜덤으로 호출해준다.

<br>

## Quotes
새로고침 할 때마다 명언을 랜덤으로 호출한다.

<br>

> index.html

```html
<h1 id="clock">00:00:00</h1>
<form id="login-form" class="hidden">
   <input
      required
       type="text"
       maxlength="15"
       placeholder="what is your name?"
   >
   <input type="submit" value="login">
</form>
<h2 id="greeting" class="hidden"></h2>
<div id="quotes">
   <span></span>
   <span></span>
</div>

```
- 명언이 들어갈 자리를 만들어 준다 ```<div id="quotes"><div>```
   - ```<span></span>```은 문구와 작가 이름이 들어갈 자리

<br>

> quotes.js

```javascript
const quotes = document.querySelector('#quotes');
const quote = quotes.querySelector('span:first-child');
const author = quotes.querySelector('span:last-child');

const quotesList = [
    {
        quote:"There is nothing in the world so irresistibly contagious as laughter and good humor.",
        author:"Charles Dickens"
    },
    {
        quote:"Love all, trust a few. Do wrong to none.",
        author:"William Shakespeare"
    },
    {
        quote:"The nice thing about egotists is that they don't talk about other people.",
        author:"Lucille S. Harper"
    },
    {
        quote:"A man's character may be learned from the adjectives which he habitually uses in conversation.",
        author:"Mark Twain"
    },
    {
        quote:"He has all the virtues I dislike and none of the vices I admire.",
        author:"Winston Churchill"
    },
    {
        quote:"Our remedies oft in ourselves do lie.",
        author:"Shakespeare"
    },
    {
        quote:"Golf is a good walk spoiled",
        author:"Mark Twain"
    },
    {
        quote:"Marriage is the only adventure open to the cowardly.",
        author:"Voltaire"
    },
    {
        quote:"We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. ",
        author:"Aristotle"
    },
    {
        quote:"Be slow to fall into friendship; but when thou art in, continue firm & constant.",
        author:"Socrates"
    },
    {
        quote:"The keenest sorrow is to recognize ourselves as the sole cause of all our adversities",
        author:"Sophocles"
    },
    {
        quote:"It is not God’s will merely that we should be happy, but that we should make ourselves happy.",
        author:"Kant"
    }
]

const quotesListLength = Math.random() * 12; 
const quotesRandom = quotesList[Math.floor(quotesListLength)];

quote.innerText = quotesRandom.quote;
author.innerText = quotesRandom.author;

```
- **Math.random() : 0부터 1사이의 랜덤한 숫자를 제공한다.**
   - ```Math.round()``` : 소수점을 **반올림**한다.
   - ```Math.ceil()``` : 소수점을 **올림**한다.
   - ```Math.floor()``` : 소수점을 **내림**한다.

<hr>

- ```quotesList``` 배열을 랜덤으로 뽑아내기 위해서 배열의 총 갯수(12개)를 ```Math.random()```에 곱해주었다.
   - 그러면 0 ~ 12 의 숫자가 랜덤으로 제공 될 수 있다.
- 하지만, ```quotesList``` 배열이 추가 혹은 삭제 되었을 때, 곱해지는 숫자를 계속 바꿔줘여하는 번거로움이 생긴다.
- 따라서, ```quotesList```의 배열의 길이를 ```length```를 사용하도록 한다.

```javascript

const quotesListLength = Math.random() * quotesList.length; 

```

<br>


## Background
새로고침 할 때마다 배경사진으로 랜덤으로 호출한다. (명언 랜덤 호출 방법이랑 동일)

<br>

> background.js

```javascript
const bgList = ['bg01.jpg','bg02.jpg','bg03.jpg','bg04.jpg','bg05.jpg'] // images폴더 안에 있는 이미지 파일명과 동일하게 써준다.

const bgListLength = Math.random() * bgList.length; 
const bgRandom = bgList[Math.floor(bgListLength)];

const bgImage = document.createElement('img');
bgImage.src = `/img/${bgRandom}`;

document.body.appendChild(bgImage);

```
- html에 만들어져 있는 자리에 js코드를 추가하는 방식이 아닌, js에서 태그를 만들어 html에 추가하는 방식이다.
- ```creatElement('a')``` : a element를 생성한다. 
- ```appendChild(a)``` : body에 a element를 추가한다.

