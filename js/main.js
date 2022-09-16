// Listen to the button - If the do this, we have to remove the onlick event from the html button.
//document.querySelector(".btn").addEventListener("click", getWeight);

// Global constants
const gEarth = 9.8;
const gMars = 3.7;
const gJupiter = 24.8;

// WEIGHT IN MARS
function getMarsWeight() {
  // Get input value
  var weight = document.querySelector(".weight").value;
  // Calculation
  var finalWeight = (weight * gMars) / gEarth;

  // Parsing result (no decimals)
  finalWeight = parseInt(finalWeight);

  // Print result
  document.querySelector(".mars").innerHTML = finalWeight + " kg";
}

// WEIGHT IN JUPITER
function getJupiterWeight() {
  // Get input value
  var weight = document.querySelector(".weight").value;
  // Calculation
  var finalWeight = (weight * gJupiter) / gEarth;

  // Parsing result (no decimals)
  finalWeight = parseInt(finalWeight);

  // Print result
  document.querySelector(".jupiter").innerHTML = finalWeight + " kg";
}
