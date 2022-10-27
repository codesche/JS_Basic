const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();             // 브라우저의 기본 동작을 막아줌
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault(); 
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

