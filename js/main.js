var myFullpage = new fullpage("#fullpage", {
  sectionsColor: [
    "rgb(22,37,56)",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white"
  ],
  scrollOverflow: true,
  responsiveHeight: 420,
  normalScrollElements: '.modal',
});


function openModal() {
  document.getElementById("modal").style.height = "100%";
}

function closeModal() {
  document.getElementById("modal").style.height = "0%";
}

function openIT() {
  document.getElementById("iT").style.width = "400px";
  document.getElementById("iT").style.borderStyle = "solid";
}

function closeIT() {
  document.getElementById("iT").style.width = "0px";
  document.getElementById("iT").style.borderStyle = "none";
}

function openDays() {
  document.getElementById("days").style.width = "400px";
  document.getElementById("days").style.borderStyle = "solid";
}

function closeDays() {
  document.getElementById("days").style.width = "0px";
  document.getElementById("days").style.borderStyle = "none";
}

function openHard() {
  document.getElementById("hard").style.width = "400px";
  document.getElementById("hard").style.borderStyle = "solid";
}

function closeHard() {
  document.getElementById("hard").style.width = "0px";
  document.getElementById("hard").style.borderStyle = "none";
}



/*
var modal = document.getElementById("Modal");
var btn = document.getElementsByClassName("Btn");
var span = document.getElementsByClassName("close")[0];
const body = document.body;
btn[0].onclick = function() {
  modal.style.display = "block";
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
btn[1].onclick = function() {
  modal.style.display = "block";
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
*/

