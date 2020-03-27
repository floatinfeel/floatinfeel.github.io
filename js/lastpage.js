let i = 0;
let txt = 'Sama halnya seperti kehidupan, kita tidak akan pernah mengetahui kapan akhirnya sebuah permainan.';
let speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("pesan").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myMove(){
    document.getElementById("showMe").onclick = function () {
         window.location.replace("index.html");
    };
}