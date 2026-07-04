// script.js

// Simple interactivity: greeting popup
document.addEventListener("DOMContentLoaded", function () {
  const helloBtn = document.createElement("button");
  helloBtn.textContent = "👋 Say Hello!";
  helloBtn.classList.add("btn-cv");
  helloBtn.style.marginTop = "30px";

  helloBtn.addEventListener("click", function () {
    alert("Hello from Ghulam Hussain! 👨‍💻\nThanks for visiting my portfolio.");
  });

  // Append button at the bottom of About section
  document.querySelector("#about .about-container").appendChild(helloBtn);
});
 