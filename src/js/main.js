let group1Buttons = document.querySelectorAll(".btn-color");
let group2Buttons = document.querySelectorAll(".btn-size");

// Get the input element for the generated string
let generatedBtnClass = document.getElementById("generatedBtnClass");

// Add event listeners to both groups of radio buttons
group1Buttons.forEach(function (button) {
  button.addEventListener("change", generateString);
});

group2Buttons.forEach(function (button) {
  button.addEventListener("change", generateString);
});

// Function to generate the string based on selected values
function generateString() {
  let group1Value = getValueOfSelectedRadio(group1Buttons);
  let group2Value = getValueOfSelectedRadio(group2Buttons);

  // Create the string based on selected values
  let generatedString = `btn${group1Value !== null ? `-${group1Value}` : ""}${
    group2Value !== null ? `-${group2Value}` : ""
  }`;

  // Update the input element with the generated string
  generatedBtnClass.value = generatedString;
  document.getElementById("sampleBtn").setAttribute("class", generatedString);
}

// Function to get the value of the selected radio button in a group
function getValueOfSelectedRadio(buttons) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked && buttons[i].value !== "none") {
      return buttons[i].value;
    }
  }
  return null; // Return null if none are selected
}

const inputField = document.getElementById("btnText");
const updateButton = document.getElementById("sampleBtn");

// Add a keyup event listener to the input field
inputField.addEventListener("keyup", function (e) {
  e.preventDefault();
  // Get the value of the input field
  const inputValue = inputField.value;

  // Set the text content of the button to the input value
  updateButton.textContent = inputValue;
});

const btnCopyButton = document.getElementById("btnCopyButton");
btnCopyButton.addEventListener("click", copyText);
function copyText() {
  // Get the input field
  let inputField = document.getElementById("generatedBtnClass");

  // Select the text in the input field
  inputField.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  inputField.setSelectionRange(0, 0);
}
