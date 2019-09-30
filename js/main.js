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
  responsiveHeight: 420,
  normalScrollElements: '.modal',
});


function openModal() {
  document.getElementById("modal").style.height = "100%";
}

function closeModal() {
  document.getElementById("modal").style.height = "0%";
}

const fetchForm = document.getElementById("fetchForm");

fetchForm.addEventListener("submit", function(i){
i.preventDefault();

const formData = new FormData(this);
const sParams = new URLSearchParams();


for (const pair of formData){
  sParams.append(pair[0], pair[1], pair[2], pair[3]);
}

fetch("http://80.211.107.117/sales/sales-bot.php",{
method: 'post',
mode:"no-cors",
body:sParams
})
});


