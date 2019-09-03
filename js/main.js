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
 /* responsiveHeight: 400,*/
  normalScrollElements: '.modal',
});


function openNav() {
  document.getElementById("modal").style.height = "100%";
}

function closeNav() {
  document.getElementById("modal").style.height = "0%";
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

