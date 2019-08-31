var myFullpage = new fullpage("#fullpage", {
  sectionsColor: [
    "rgb(22,37,56)",
    "white",
    "white",
    "white",
    "white",
    "rgb(22,37,56)",
    "white"
  ],
  scrollOverflow: true,
 /* responsiveHeight: 400,*/
  normalScrollElements: '.modal',
});





var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("myBtn");
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

