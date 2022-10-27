const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 문자열(String)은 오타 문제가 발생할 수 있으므로 변수 지정해서 사용
// 보통은 대문자 변수로 사용 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";                       // 유저가 input에 입력한 이름

function onLoginSubmit(event) {
    event.preventDefault();                            // 브라우저의 기본 동작을 막아줌 - 원래 하는 행동을 멈춰줌 
    loginForm.classList.add(HIDDEN_CLASSNAME);         // form을 다시 숨겨줌 
    const username = loginInput.value;                 // loginInput.value를 username이라는 변수로 저장
    localStorage.setItem(USERNAME_KEY, username);      // username 값을 username이라는 key와 함께 local storage에 저장
    paintGreetings(username);                          // paintGreetings 함수 호출
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);        // 화면에 띄워줌, hidden 기능 제거
}

// localStorage - 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB같은 API
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}

