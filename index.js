const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankYou.classList.remove("hidden")
  mainContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
  thankYou.classList.add("hidden")
  mainContainer.style.display = "block";
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})