const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");

function getClock() {
  const dayKorean = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const date = new Date();
  const years = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const days = dayKorean[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  day.innerText = `${years}년 ${month}월 ${dates}일 ${days}`;
  clock.innerText = `${hours}시${minutes}분${seconds}초`;
}

getClock();
setInterval(getClock, 1000);
