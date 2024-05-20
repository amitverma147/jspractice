function countVowels() {
  const inputString = document.getElementById("inputString").value;
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of inputString) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById("result").textContent = `Number of vowels: ${count}`;
}
