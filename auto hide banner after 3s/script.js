let count = 0;
let seconds = 5;

let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector(".percentText");

let interval = setInterval(function () {
  if (count < 100) {
    count++;
    progress.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
  } else {
    document.querySelector("h1").textContent = "Downloaded";
    clearInterval(interval);

    // auto hide banner after 3 seconds
    setTimeout(function () {
      document.querySelector(".download-container").style.opacity = "0";

      setTimeout(function () {
        docuSment.querySelector(".download-container").style.display = "none";
      }, 500);
    }, 3000);
  }
}, (seconds * 1000) / 100);
