var mainCard = document.querySelector(".glass-boxs").children;
var backGround = document.querySelector(".home-container");
var backColor = [
  "linear-gradient(90deg, #44F4AD 0%, #50c860 22%, #50c860 49%, #f0f23c 75%, #f0f23c 100%)",
  "linear-gradient(90deg, rgba(209,156,90,1) 0%, rgba(227,114,77,1) 50%, rgba(252,105,69,1) 100%)",
  "background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);",
];

// for (let i = 0; i < mainCard.length; i++) {
//   mainCard[i].classList.toogle(".transp-transition");
//   mainCard[i].querySelector(".box-img").style = ["transform: translateY(-100px); opacity : 0"];
//   mainCard[i].querySelector(".right-text").style = ["transform: translateY(-100px); opacity : 0"];
//   mainCard[i].querySelector(".next-b").style = ["opacity : 0"];
// }
mainCard[0].addEventListener("click", () => {
  backGround.style.background = "linear-gradient(90deg, #44F4AD 0%, #50c860 22%, #50c860 49%, #f0f23c 75%, #f0f23c 100%)";
  mainCard[0].querySelector(".box-img").style = ["transform: translateY(-100px); opacity : 0"];
  mainCard[0].querySelector(".right-text").style = ["transform: translateY(-100px); opacity : 0"];
  mainCard[0].querySelector(".next-b").style = ["opacity : 0"];
  setTimeout(() => {
    mainCard[0].style = "display:none";
    mainCard[1].style = "opacity : 1";
    mainCard[1].querySelector(".box-img").style = ["opacity : 1"];
    mainCard[1].querySelector(".right-text").style = ["opacity : 1"];
    mainCard[1].querySelector(".box2-button").style = ["transform: translateY(0px); opacity : 1"];
  }, 400);
});

mainCard[1].addEventListener("click", () => {
  backGround.style.background = "linear-gradient(90deg, rgba(209,156,90,1) 0%, rgba(227,114,77,1) 50%, rgba(252,105,69,1) 100%)";
  mainCard[1].querySelector(".box-img").style = "transform: translateY(-100px); opacity : 0";
  mainCard[1].querySelector(".right-text").style = ["transform: translateY(-100px); opacity : 0"];
  mainCard[1].querySelector(".box2-button").style = ["transform: translateY(-10px); opacity : 0"];
  setTimeout(() => {
    mainCard[1].style = "display:none";
    mainCard[2].style = "opacity : 1";
    mainCard[2].querySelector(".box-img").style = ["opacity : 1"];
    mainCard[2].querySelector(".right-text").style = ["opacity : 1"];
    mainCard[2].querySelector(".box3-button").style = ["opacity : 1; transform: translateY(0px);"];
  }, 400);
});

mainCard[2].addEventListener("click", () => {
  backGround.style = "background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);";
  mainCard[2].querySelector(".box-img").style = ["transform: translateY(-100px); opacity : 0"];
  mainCard[2].querySelector(".right-text").style = ["transform: translateY(-100px); opacity : 0"];
  mainCard[2].querySelector(".box3-button").style = ["transform: translateY(-30px); opacity : 0"];
  // mainCard[2].querySelector(".right-text").style = ["transform: translateY(-100px); opacity : 0"];

  setTimeout(() => {
    mainCard[2].style = "display:none";
    mainCard[0].style = "display:flex";
    mainCard[0].style = "opacity: 1";
    mainCard[0].querySelector(".box-img").style = ["transform: translateY(-30px); opacity : 1"];
    mainCard[0].querySelector(".right-text").style = ["transform: translateY(-30px); opacity : 1"];
    mainCard[0].querySelector(".next-b").style = ["transform: translateY(-30px); opacity : 1"];
  }, 400);
});

// mainCard[0].addEventListener("mouseout", () => {
//   backGround.style.background = "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)";
//   mainCard.style.backGround.style.transition = "1s";
// });
// mainCard[2].addEventListener("click", () => {
//   backGround.style.background = "linear-gradient(90deg, #fc466b 0%, #fffff 100%)";
//   backGround.style.transition = "1s";
// });
