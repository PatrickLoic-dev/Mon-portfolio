
var dropdown = document.getElementsByClassName("dropdown-btn");
var dropdown2 = document.getElementsByClassName("dropdown-btn2");
var dropdown3 = document.getElementsByClassName("dropdown-btn3");
var arrow = document.getElementsByClassName("arrow");
var i;

function rotateElement(angle) {
  this.style.transform = `rotate(${angle}deg)`;
}

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex" && dropdownContent.style.flexDirection === "column") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
      dropdownContent.style.marginLeft = "37.64px"; 
    }
  });
}


for (i = 0; i < dropdown2.length; i++) {
  dropdown2 [i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex" && dropdownContent.style.flexDirection === "column") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
      dropdownContent.style.marginLeft = "37.64px";
    }
  });
}

for (i = 0; i < dropdown3.length; i++) {
  dropdown3[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex" && dropdownContent.style.flexDirection === "column") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "flex";
      dropdownContent.style.flexDirection = "column";
      dropdownContent.style.marginLeft = "37.64px";
    }
  });
}

