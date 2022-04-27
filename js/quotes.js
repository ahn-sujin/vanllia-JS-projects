const quotes = document.querySelector('#quotes');
const quote = quotes.querySelector('span:first-child');
const author = quotes.querySelector('span:last-child');

const quotesList = [
    {
        quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author:"엘사 맥스웰"
    },
    {
        quote:"먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author:"채근담"
    },
    {
        quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author:"제임스 오펜하임"
    },
    {
        quote:"너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
        author:"랄프 왈도 에머슨"
    },
    {
        quote:"한번의 실패와 영원한 실패를 혼동하지 마라",
        author:"F.스콧 핏제랄드"
    },
    {
        quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
        author:"괴테"
    },
    {
        quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author:"괴테"
    },
    {
        quote:"려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다",
        author:"마더 테레사"
    },
    {
        quote:"고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다 ",
        author:"베토벤"
    },
    {
        quote:"겨울이 오면 봄이 멀지 않으리",
        author:"셸리"
    },
    {
        quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author:"볼드윈"
    },
    {
        quote:"행복은 습관이다,그것을 몸에 지니라",
        author:"허버드"
    }
]

const quotesListLength = Math.random() * quotesList.length;
const quoteListRandom = quotesList[Math.floor(quotesListLength)];

quote.innerText = quoteListRandom.quote;
author.innerText = quoteListRandom.author;

