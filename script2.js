document
  .getElementById("substringForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputString = document.getElementById("inputString").value;
    const endIndex = parseInt(document.getElementById("endIndex").value, 10);

    if (isNaN(endIndex) || endIndex < 0 || endIndex > inputString.length) {
      alert("Please enter a valid end index.");
      return;
    }

    const substring = inputString.substring(0, endIndex + 1);

    document.getElementById("result").innerText = substring;
    document.getElementById("resultContainer").style.display = "block";
  });
