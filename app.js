function showMenu() {
  let menu = document.getElementById("burger-btn");
  if (menu.className === "navbar-ul") {
    menu.className += "show";
  } else {
    menu.className = "navbar-ul";
  }
}

// let pop_up = document.querySelector("#subscribe-btn").addEventListener("click", () => {
//     if (document.querySelector("#email-input").value == "") {
//         alert("Empty!!! \nPlease insert your email ");
//     } else {
//         alert("WELCOME DEAR \nYou subscribed successfully...");
//     }
// })


function showMore() {
  let more = document.getElementById("country-box2-id");
  let btn = document.getElementById("showMore");
  if (more.style.display === "none") {
    more.style.display = "flex";
    btn.innerHTML = "show less";
  } else {
    more.style.display = "none";
    btn.innerHTML = "click to see more";
    btn.style.color = "#ffffff";
  }
}

window.addEventListener("load", () => {
  if (navigator.onLine) {
    console.log("شما متصل به اینترنت هستید");
  } else {
    console.log("شما متصل به اینترنت نیستید ");
  }
});

var w = window.innerWidth || document.documentElement.clientWidth;
var h = window.innerHeight || document.body.clientHeight;

window.addEventListener("load", () => {
  if ((w > 1020) & (w < 1450)) {
    console.log("you are using a desktop or laptop... ");
  } else if ((w < 1020) & (w > 559)) {
    console.log("you are using a tablet...");
  } else if (w < 600) {
    console.log("your device is a Smart phone...");
  }
});
