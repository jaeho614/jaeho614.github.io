const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USER_KEY = "username";
const HIDDEN = "hidden";

function paintGreeting() {
  const username = localStorage.getItem(USER_KEY);
  greeting.textContent = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN);
}

function submitLoginForm(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USER_KEY, username);
  loginForm.classList.add(HIDDEN);
  paintGreeting();
}

const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", submitLoginForm);
} else {
  paintGreeting();
}
