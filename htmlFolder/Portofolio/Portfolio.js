let card = document.querySelectorAll(".card")
let closeBtns = document.querySelectorAll(".close");
let video = document.querySelectorAll("video")


card.forEach(function(cardBtns){
  cardBtns.onclick = function() {
    let modal = cardBtns.getAttribute("data-modal");

    document.getElementById(modal).style.display = "flex"; 
    video.forEach((videosu)=> {
      videosu.play()   
    })

  }
})


closeBtns.forEach((closebtn) => {
  closebtn.onclick = function(){
    closebtn.closest('.modal').style.display = 'none';
    video.forEach((videosu)=> {
      videosu.pause()   
      videosu.currentTime = 0;
    })
  

  }
});

