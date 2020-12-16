const navBtn = document.getElementById("nav-button");
navBtn.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("mobile");
  if (this.textContent === "≡") this.textContent = "x";
  else this.textContent = "≡";
});
