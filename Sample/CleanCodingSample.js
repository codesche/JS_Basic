const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // 상수 설정해서 실수 없게끔 코딩
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
} 

h1.addEventListener("click", handleTitleClick);
