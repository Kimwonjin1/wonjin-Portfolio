const text = document.querySelector(".Web");
const strText = text.textContent;
//textContent 속성은 노드와 그 자손의 텍스트 콘텐츠를 표한함
const splitText = strText.split("");
//split은 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
