const kmInput = document.getElementById("kmInput");
const error = document.getElementById("error");
const totalBill = document.getElementById("totalBill");
const breakdown = document.getElementById("breakdown");
const resultSection = document.getElementById("resultSection");

document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateFare);

function calculateFare() {
  let km = parseFloat(kmInput.value);

  error.textContent = "";
  breakdown.innerHTML = "";

  // Validation
  if (kmInput.value.trim() === "") {
    error.textContent = "Please enter a non-negative number of kilometres";

    resultSection.classList.add("d-none");

    return;
  }

  if (isNaN(km) || km < 0) {
    error.textContent = "Please enter a non-negative number of kilometres";

    resultSection.classList.add("d-none");

    return;
  }

  let total = 0;

  // Fare Slabs
  // First 10 km = Rs.11/km
  // Next 40 km = Rs.10/km
  // Above 50 km = Rs.8/km

  let firstSlab = 0;
  let secondSlab = 0;
  let thirdSlab = 0;

  if (km <= 10) {
    firstSlab = km;

    total = firstSlab * 11;
  } else if (km <= 50) {
    firstSlab = 10;
    secondSlab = km - 10;

    total = firstSlab * 11 + secondSlab * 10;
  } else {
    firstSlab = 10;
    secondSlab = 40;
    thirdSlab = km - 50;

    total = firstSlab * 11 + secondSlab * 10 + thirdSlab * 8;
  }

  // Total Bill
  totalBill.textContent =
    "Rs. " +
    total.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Breakdown
  breakdown.innerHTML = `
    <div class="breakdown-item">
      ${firstSlab} km × Rs.11 =
      Rs. ${(firstSlab * 11).toFixed(2)}
    </div>

    <div class="breakdown-item">
      ${secondSlab} km × Rs.10 =
      Rs. ${(secondSlab * 10).toFixed(2)}
    </div>

    <div class="breakdown-item">
      ${thirdSlab} km × Rs.8 =
      Rs. ${(thirdSlab * 8).toFixed(2)}
    </div>
  `;

  resultSection.classList.remove("d-none");
}