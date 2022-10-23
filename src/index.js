let rate = 0;

function thankYou() {
  if (rate != 0){
    document.getElementById("main").style.display='none';
    document.getElementById("thank").style.display='block';
    document.getElementById("selection").innerHTML = "You selected " + rate + " out of 5";
  }
}

document.getElementById("submit").addEventListener("click", thankYou);

const btns = document.querySelectorAll(".button");

btns.forEach(btn => btn.addEventListener("click", function (){
  rate = btn.value;
}));

