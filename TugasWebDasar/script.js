function notif() {
  alert("Under Development 🙏🏻");
}

document.getElementById("contact").onmouseover = function () {
  document.getElementById("contact").innerHTML = "+62 123456789";
};
document.getElementById("contact").onmouseout = function () {
  document.getElementById("contact").innerHTML = "Contact";
};
