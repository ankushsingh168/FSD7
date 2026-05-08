// function Bulb1ON() {
//   document.getElementById("bulb1").style.backgroundColor = "yellow";
// }

// function Bulb1OFF() {
//   document.getElementById("bulb1").style.backgroundColor = "White";
// }

// function Bulb1RED() {
//   document.getElementById("bulb1").style.backgroundColor = "red";
// }

// function Bulb1BLUE() {
//   document.getElementById("bulb1").style.backgroundColor = "blue";
// }

// function Bulb1GREEN() {
//   document.getElementById("bulb1").style.backgroundColor = "green";
// }

// document.getElementById("bulbRed").addEventListener("click", Bulb1RED);
// document.getElementById("bulbBlue").addEventListener("click", Bulb1BLUE);
// document.getElementById("bulbGreen").addEventListener("click", Bulb1GREEN);

// document
//   .getElementById("bulb1Color")
//   .addEventListener("change", ChangeBulbColor);

// function changeBulbColor() {
//   const color = document.getElementById("bulb1Color").value;
//   document.getElementById("bulb1").style.backgroundColor = color;
// }

// function reset(){
//     window.Location.reLoad();
// }





// // Heading color change
// document.getElementById("headingColor").addEventListener("input", function () {
//   document.getElementById("heading").style.color = this.value;
// });

// // Paragraph color change
// document.getElementById("paraColor").addEventListener("input", function () {
//   document.getElementById("para").style.color = this.value;
// });

// // Background color change
// document.getElementById("bgColor").addEventListener("input", function () {
//   document.body.style.backgroundColor = this.value;
// });

// // Reset function
// function resetColors() {
//   document.getElementById("heading").style.color = "black";
//   document.getElementById("para").style.color = "gray";
//   document.body.style.backgroundColor = "white";

//   // Reset input values
//   document.getElementById("headingColor").value = "#000000";
//   document.getElementById("paraColor").value = "#808080";
//   document.getElementById("bgColor").value = "#ffffff";
// }


// Heading color change
document.getElementById("headingColor").addEventListener("input", function () {
  document.getElementById("heading").style.color = this.value;
});

// Paragraph color change
document.getElementById("paraColor").addEventListener("input", function () {
  document.getElementById("para").style.color = this.value;
});

// Background color change
document.getElementById("bgColor").addEventListener("input", function () {
  document.body.style.backgroundColor = this.value;
});

// Reset function
function resetColors() {
  // Default colors set karo
  document.getElementById("heading").style.color = "black";
  document.getElementById("para").style.color = "gray";
  document.body.style.backgroundColor = "white";

  // Inputs ke values bhi reset karo
  document.getElementById("headingColor").value = "#000000"; // black
  document.getElementById("paraColor").value = "#808080";   // gray
  document.getElementById("bgColor").value = "#ffffff";     // white
}
