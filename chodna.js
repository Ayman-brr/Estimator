const submitButton = document.getElementById("sub"); 
const inputElement = document.getElementById("choda"); 

const estFields = [
  document.getElementById("est1"),
  document.getElementById("est2"),
  document.getElementById("est3"),
  document.getElementById("est4"),
  document.getElementById("est5"),
  document.getElementById("est6"),
  document.getElementById("est7"),
  document.getElementById("est8"),
  document.getElementById("est9"),
  document.getElementById("est10")
];

let estimations = [];

submitButton.onclick = function() {
  const value = Number(inputElement.value);
  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return; 
  }

  estimations = calculateEstimations(value);
  updateEstimationFields();
};

function calculateEstimations(value) {
  const results = [];
  for (let i = -25; i <= 25; i += 5) {
    const percentage = i / 100;
    results.push(Math.round(value + (value * percentage)));
  }
  return results;
}

function updateEstimationFields() {
  for (let i = 0; i < estFields.length; i++) {
    const formattedValue = estimations[i] !== undefined ? estimations[i].toFixed(2) : "";
    estFields[i].value = formattedValue;
  }
}

