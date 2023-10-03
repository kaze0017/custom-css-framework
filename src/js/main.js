import CreateOptions from "./CreateOptions.js";

// Wrapper**********************************************************************************************************************

const wrapperOptionsArray = ["sm", "md", "lg", "xl"];

let elementsToApply = document.querySelectorAll(".wrapper-xl");

CreateOptions(
  "wrapperOptions",
  wrapperOptionsArray,
  "wrapper",
  elementsToApply
);

// Font-Color-Background-Margin-Padding*****************************************************************************************
const fontSizes = ["1", "2", "3", "4"];
const fontWeights = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];
const spaces = ["1", "2", "3", "4", "5", "6"];

const colors = ["primary", "secondary", "success", "warning", "danger"];
const borderWiths = ["1", "2", "3", "4", "5", "6"];

const sampleText = document.getElementById("sampleText");

// Font size

elementsToApply = document.querySelectorAll("#sampleText");
CreateOptions("fontSizeOptions", fontSizes, "font-size", elementsToApply);

// Font weight
CreateOptions("fontWeightOptions", fontWeights, "font-weight", elementsToApply);

// Font color
CreateOptions("fontColorOptions", colors, "font-color", elementsToApply);

// Background color
CreateOptions("bgColorOptions", colors, "bg-color", elementsToApply);

// Margin
CreateOptions("marginOptions", spaces, "m", elementsToApply);

// Padding
CreateOptions("paddingOptions", spaces, "p", elementsToApply);

// Border
CreateOptions("borderOptions", borderWiths, "border", elementsToApply);

// Buttons**********************************************************************************************************************

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
btnCopyButton.addEventListener("click", copyTextBtn);
function copyTextBtn() {
  // Get the input field
  let inputField = document.getElementById("generatedBtnClass");

  // Select the text in the input field
  inputField.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  inputField.setSelectionRange(0, 0);
}

//
//
// Lists **********************************************************************************************************************

let group1Lists = document.querySelectorAll(".li-color");
let group2Lists = document.querySelectorAll(".li-style");

// Get the input element for the generated string
let generatedLiClass = document.getElementById("generatedLiClass");

// Add event listeners to both groups of radio buttons
group1Lists.forEach(function (button) {
  button.addEventListener("change", generateStringLi);
});

group2Lists.forEach(function (button) {
  button.addEventListener("change", generateStringLi);
});

// Function to generate the string based on selected values
function generateStringLi() {
  let group1Value = getValueOfSelectedRadio(group1Lists);
  let group2Value = getValueOfSelectedRadio(group2Lists);

  // Create the string based on selected values
  let generatedString = `list-item${
    group2Value !== null ? `-${group2Value}` : ""
  }${group1Value !== null ? `-${group1Value}` : ""}`;

  // Update the input element with the generated string
  generatedLiClass.value = generatedString;
  document.getElementById("sampleLi").setAttribute("class", generatedString);
}

// const inputField = document.getElementById("btnText");
const updateLi = document.getElementById("sampleLi");

// Add a keyup event listener to the input field

const liCopyButton = document.getElementById("liCopyButton");
liCopyButton.addEventListener("click", copyText);
function copyText() {
  // Get the input field
  let inputField = document.getElementById("generatedLiClass");

  // Select the text in the input field
  inputField.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  inputField.setSelectionRange(0, 0);
}

// Grids**********************************************************************************************************************

const gridsCounts = document.getElementById("colsCountOptions");
const numberOfColumns = [1, 2, 3, 4, 5, 6];

numberOfColumns.forEach(
  (number) =>
    (gridsCounts.innerHTML += `<label>
            <input
              class="grid-options-counts"
              type="radio"
              name="colCont"
              value="${number}"
              ${number === 3 ? "checked" : ""}

            />
            ${number}
          </label>`)
);

const gaps = ["none", "s", "m", "l"];
const rowGapOptions = document.getElementById("rowGapOptions");
gaps.forEach(
  (gap) =>
    (rowGapOptions.innerHTML += `<label>
              <input
                class="grid-options-row-gap"
                type="radio"
                name="rowGap"
                value="${gap}"
                ${gap === "none" ? "checked" : ""}
              />
              ${gap}
            </label>`)
);

const colGapOptions = document.getElementById("colGapOptions");
gaps.forEach(
  (gap) =>
    (colGapOptions.innerHTML += `<label>
              <input
                class="grid-options-col-gap"
                type="radio"
                name="colGap"
                value="${gap}"
                ${gap === "none" ? "checked" : ""}
              />
              ${gap}
            </label>`)
);

let gridOptions1 = document.querySelectorAll(".grid-options-counts");
let gridOptions2 = document.querySelectorAll(".grid-options-row-gap");
let gridOptions3 = document.querySelectorAll(".grid-options-col-gap");

// Add event listeners to both groups of radio buttons
gridOptions1.forEach(function (button) {
  button.addEventListener("change", generateStringGrid);
});
gridOptions2.forEach(function (button) {
  button.addEventListener("change", generateStringGrid);
});
gridOptions3.forEach(function (button) {
  button.addEventListener("change", generateStringGrid);
});

// Function to generate the string based on selected values
function generateStringGrid() {
  let group1Value = getValueOfSelectedRadio(gridOptions1);
  let group2Value = getValueOfSelectedRadio(gridOptions2);
  let group3Value = getValueOfSelectedRadio(gridOptions3);

  // Create the string based on selected values
  let gapsClass;
  if (group2Value === null && group3Value === null) {
    gapsClass = "";
  }
  if (group2Value !== null && group3Value === null) {
    gapsClass = `-${group2Value}`;
  }
  if (group2Value === null && group3Value !== null) {
    gapsClass = `-n-${group3Value}`;
  }
  if (group2Value !== null && group3Value !== null) {
    gapsClass = `-${group2Value}-${group3Value}`;
  }

  let generatedString = `grid-cols-${group1Value}${gapsClass}`;

  // Update the input element with the generated string
  generatedLiClass.value = generatedString;
  document.getElementById("sampleGrid").setAttribute("class", generatedString);
}
