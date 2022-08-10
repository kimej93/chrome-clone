const quotes = [
  {
    quote: "It is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    quote: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "I’ve failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    author: "Dwayne Johnson",
  },
  {
    quote:
      "I didn't get there by wishing for it or hoping for it, but by working for it.",
    author: "Estée Lauder",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤자민 프랭클린",
  },
  {
    quote: "모든 사람들로부터 사랑받지 않아도 된다.",
    author: "니체",
  },
  {
    quote:
      "못하는 일에 초점 맞추기를 그만하면 자기가 어떤 일을 할 수 있는지 알고 놀라게 될 것이다.",
    author: "앨릭스 코브",
  },
  {
    quote: "행복은 습관이다.",
    author: "허버드",
  },
  {
    quote: "정해진 것은 아무것도 없다. 정해진 운명 또한 없다.",
    author: "도교",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author} `;
