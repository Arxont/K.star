var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close")[0];
btn[0].onclick = function() {
  modal.style.display = "block";
};
btn[1].onclick = function() {
  modal.style.display = "block";
};
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
