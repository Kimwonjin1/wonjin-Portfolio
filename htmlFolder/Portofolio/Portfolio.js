
var card = document.querySelectorAll(".card")
var closeBtns = document.querySelectorAll(".close");
var video = document.querySelector("video")


card.forEach(function(cardBtns){
  cardBtns.onclick = function() {
    let modal = cardBtns.getAttribute("data-modal");
    document.getElementById(modal).style.display = "flex"; 
    video.play()
  }
})


closeBtns.forEach((btn) => {
  btn.onclick = function(){
    btn.closest('.modal').style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }
});

