const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();             // 브라우저의 기본 동작을 막아줌
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username} keep going`;       // String 끼리 합칠 때
    // greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

