//card announc
var modal = document.getElementById("myModal");

//tombol level sulit
var btn = document.getElementById("myBtn");

///ambil element terdekat
var span = document.getElementsByClassName("close")[0];

//invoke klik sulit
btn.onclick = function() {
  message.style.display = "block";
  yes.style.display = "block";
}

//tutup announc
span.onclick = function() {
  message.style.display = "none";
  yes.style.display = "none";
}

//tutup
window.onclick = function(event) {
  if (event.target == message || event.target == yes) {
    message.style.display = "none";
    yes.style.display = "none";
  }
}

function next(){
	window.location.replace("level1.html");
}
