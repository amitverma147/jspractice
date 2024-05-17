document
  .getElementById("charForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const inputString = document.getElementById("inputString").value;
    const index = parseInt(document.getElementById("index").value);
    const resultDiv = document.getElementById("result");

    if (index < 0 || index >= inputString.length) {
      resultDiv.textContent = "Invalid index.";
    } else {
      const character = inputString.charAt(index);
      resultDiv.textContent = `Character at index ${index}: ${character}`;
    }
  });
