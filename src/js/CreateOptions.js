export default function CreateOptions(
  divId,
  optionsArray,
  classPrefix,
  elementsToTarget
) {
  const div = document.getElementById(divId);
  div.classList.add("m-1");
  optionsArray.forEach(
    (option, index) =>
      (div.innerHTML += `<label>
              <input
                class="${divId}-option"
                type="radio"
                name="${divId}-option"
                value="${option}"
                ${index === 0 ? "checked" : ""}

              />
              ${option}
            </label>`)
  );
  div.innerHTML += `        <input type="text" id="generatedClassFor${divId}" value="${classPrefix}" readonly />
  <button id="copyGenerated${divId}">Copy</button>`;

  const optionsBtns = document.querySelectorAll(`.${divId}-option`);
  optionsBtns.forEach(function (button) {
    button.addEventListener("change", generateString);
  });

  function generateString() {
    let group1Value = getValueOfSelectedRadio(optionsBtns);

    // Create the string based on selected values
    let generatedString = `${classPrefix}-${group1Value}`;

    // Update the input element with the generated string

    elementsToTarget.forEach((element) => {
      optionsArray.forEach((option) => {
        element.classList.remove(`${classPrefix}-${option}`);
      });
      element.classList.add(generatedString);
      document.getElementById(`generatedClassFor${divId}`).value =
        generatedString;
    });
  }
  document
    .getElementById(`copyGenerated${divId}`)
    .addEventListener("click", copyText);
  function copyText() {
    // Get the input field
    let inputField = document.getElementById(`generatedClassFor${divId}`);

    // Select the text in the input field
    inputField.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    inputField.setSelectionRange(0, 0);
  }
  function getValueOfSelectedRadio(buttons) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].checked && buttons[i].value !== "none") {
        return buttons[i].value;
      }
    }
    return null; // Return null if none are selected
  }
}
