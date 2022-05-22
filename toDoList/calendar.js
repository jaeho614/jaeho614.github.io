const smallCalendar = document.querySelector(".small-calendar h2");

const date = new Date();
const years = date.getFullYear();
const months = String(date.getMonth() + 1).padStart(2, "0");
const days = String(date.getDate()).padStart(2, "0");
smallCalendar.textContent = `${years}년 ${months}월 ${days}일`;
