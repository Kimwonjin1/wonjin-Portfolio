var careerB = document.querySelector(".career-items").children;
var careerSC = document.querySelector(".circles").children;
var careerCH = document.querySelector(".career-char img");
var careerS = document.querySelector(".career-color");
var duck = document.querySelector("career-char img");

function initMap() {  
  
  var options = {
    zoom: 2,
    center: { lat: 32.75970953886791, lng: 102.55201213436554 },
  };

  var map = new google.maps.Map(document.getElementById("google-map"), options);

   var MarkandInfo = (marker, content, careerB) => {

    var mark = new google.maps.Marker({
      position:marker,
      map:map,
   })
   
   var infowindow = new google.maps.InfoWindow({
    content: content
  })

  careerB.addEventListener('click', function() {

    infowindow.open(map, mark);

  }) 
}

MarkandInfo({ lat: 36.992993, lng: 126.828592},'<h1>NAVY</h1>', careerB[0])
MarkandInfo({ lat: 35.2283169018659, lng: -80.84258464268434} ,'<h1>AMERICA</h1>', careerB[1])
MarkandInfo({ lat: 28.724931954586644, lng: 77.22757668973156}, '<h1>INDIA</h1>', careerB[2])
MarkandInfo({ lat: 35.1731631, lng: 129.127601}, '<h1>COLLEGE</h1>', careerB[3])
MarkandInfo({ lat: 35.1765759, lng: 129.125176}, '<h1>COMPANY</h1>', careerB[4])

}
initMap()
  careerB[0].addEventListener("click", () => {
    careerS.style.width = "0%";
    careerSC[0].style.borderColor = "red";
    careerSC[1].style.borderColor = "#7a7a7a";
    careerSC[2].style.borderColor = "#7a7a7a";
    careerSC[3].style.borderColor = "#7a7a7a";
    careerSC[4].style.borderColor = "#7a7a7a";
    careerCH.style.left = "-50%";
  });
  careerB[1].addEventListener("click", () => {
    careerSC[2].style.borderColor = "#7a7a7a";
    careerSC[3].style.borderColor = "#7a7a7a";
    careerSC[4].style.borderColor = "#7a7a7a";
    careerSC[0].style.borderColor = "red";
    careerSC[1].style.borderColor = "red";
    careerS.style.width = "25%";
    careerCH.style.left = "-25%";
  });
  careerB[2].addEventListener("click", () => {
    careerSC[0].style.borderColor = "red";
    careerSC[1].style.borderColor = "red";
    careerSC[2].style.borderColor = "red";
    careerSC[3].style.borderColor = "#7a7a7a";
    careerSC[4].style.borderColor = "#7a7a7a";
    careerCH.style.left = "0%";
    careerS.style.width = "50%";
  });
  careerB[3].addEventListener("click", () => {
    careerSC[0].style.borderColor = "red";
    careerSC[1].style.borderColor = "red";
    careerSC[2].style.borderColor = "red";
    careerSC[3].style.borderColor = "red";
    careerSC[4].style.borderColor = "#7a7a7a";
    careerCH.style.left = "25%";

    careerS.style.width = "75%";
  });
  careerB[4].addEventListener("click", () => {
    careerSC[0].style.borderColor = "red";
    careerSC[1].style.borderColor = "red";
    careerSC[2].style.borderColor = "red";
    careerSC[3].style.borderColor = "red";
    careerSC[4].style.borderColor = "red";
    careerCH.style.left = "50%";
    careerS.style.width = "100%";
  });


 