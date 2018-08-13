
var imgTags = document.getElementsByTagName('img');
var imagenes = ["assets/buho1.jpg", "assets/buho2.jpg", "assets/buho3.jpg","assets/buho4.jpg"];
var acerts=document.getElementById("aciertos");
var errors=document.getElementById("errores");
var marcadorAcerts=document.getElementById("marcadorAcerts");
var marcadorErrors=document.getElementById("marcadorError");

var posicionAleatoria;
var numMaximoRepetido = 2;

function numeroAleatorio(max, min) {
  var aleatorio = Math.floor(Math.random() * (max - min + 1) - min);
  return aleatorio;
}

function moverFichas() {
  for (var i = 0; i < imagenes.length; i++) {
    for(var j = 0; j < numMaximoRepetido; j++){
      posicionAleatoria = numeroAleatorio(imgTags.length - 1, 0);
    while(imgTags[posicionAleatoria].id != ""){
        posicionAleatoria = numeroAleatorio(imgTags.length - 1, 0);
      }
      imgTags[posicionAleatoria].id= imagenes[i];
    }
  }
}
var contImages=0;
var clickImg1="";
var clickImg2="";
var firstElementClick= "";
var secondElementClick="";
contAcerts=0;
contErrors=0;

moverFichas();
$(".letter").click(function () {
    contImages++;
    var imageId = this.id;
    this.src = imageId;

    while (clickImg1 == "" || clickImg2=="") {
        if (clickImg1 == "") {
            clickImg1 = imageId;
            $(this).addClass('Click1');
            firstElementClick = this;
            break;
        }else{
            clickImg2 = imageId;
            $(this).addClass('Click2');
            secondElementClick = this;
            break;
        }
    }
    if(clickImg1 !="" && clickImg2 !="" && clickImg1==clickImg2){
     clickImg1="";
     clickImg2="";
     contImages=0;
     //alert("ACERTASTE");
     contAcerts++;
     marcadorAcerts.innerHTML=contAcerts;
    }
});



 window.addEventListener("click",evaluate);

function evaluate(){
  setTimeout(function(){
    if(contImages==2){
    //alert("Fail");
    firstElementClick.src= "assets/poker.jpg";
    secondElementClick.src= "assets/poker.jpg";
    contImages=0;
    clickImg1="";
    clickImg2="";
    firstElementClick= "";
    secondElementClick="";
   } },500);
   if(contImages==2){
   contErrors++;
   marcadorErrors.innerHTML=contErrors;
   }
}
