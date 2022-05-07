const quotes = [
    {
        quote: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
        author: "Herodotus",
    },
    {
        quote: "웃음 없는 하루는 낭비한 하루다.",
        author: "Charlie Chaplin",
    },
    {
        quote: "태어나면서부터 현명한 이는 없다.",
        author: "Miguel de Cervantes",
    },
    {
        quote: "행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.",
        author: "Jean Paul Richter",
    },
    {
        quote: "성공이 그렇게 달콤한 것은 결코 성공하지 못한 사람들이 있기 때문이다.",
        author: "Emily Dickinson",
    },
    {
        quote: "사람들이 원하는 모든 것은 자신의 얘기를 들어줄 사람이다.",
        author: "Hugh Elliott",
    },
    {
        quote: "한 시간 독서로 누그러지지 않은 걱정은 결코 없다.",
        author: "Charles De Secondat",
    },
    {
        quote: "당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.",
        author: "Mother Teresa",
    },
    {
        quote: "인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자.",
        author: "Plutarch",
    },
    {
        quote: "수정을 용납하지 않는 계획은 나쁜 계획이다.",
        author: "Publilius Syrus",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;