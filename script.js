// shows each section individually, and highlights the matching menu link
var sections = document.querySelectorAll("section");
var menuLinks = document.querySelectorAll("#menu a");
var menu = document.getElementById("menu");

function showPage(pageId) {
  // hide every section, then show the one we want
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("show");
  }
  document.getElementById(pageId).classList.add("show");

  // highlight the matching menu link
  for (var j = 0; j < menuLinks.length; j++) {
    if (menuLinks[j].getAttribute("data-page") === pageId) {
      menuLinks[j].classList.add("active");
    } else {
      menuLinks[j].classList.remove("active");
    }
  }

  
  menu.classList.remove("open");
  window.scrollTo(0, 0);
}

// every link with a data-page (menu links and links inside the text)
var allLinks = document.querySelectorAll("[data-page]");

for (var k = 0; k < allLinks.length; k++) {
  allLinks[k].addEventListener("click", function (event) {
    event.preventDefault();   // stops the page jumping
    showPage(this.getAttribute("data-page"));
  });
}


var menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});


var riskButton = document.getElementById("risk-button");
var riskBox = document.getElementById("risk-box");

riskButton.addEventListener("click", function () {
  if (riskBox.style.display === "none") {
    riskBox.style.display = "block";
    riskButton.textContent = "Hide risks";
  } else {
    riskBox.style.display = "none";
    riskButton.textContent = "Show risks";
  }
});