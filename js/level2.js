let i = 0;
let txt = 'Situasi tidak terduga bisa terjadi kapanpun dan pada siapapun.';
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
         window.location.replace("level3.html");
    };
}