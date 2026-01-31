function analyzeArray() {
  let input = document.getElementById("arrayInput").value;

  if (input.trim() === "") {
    document.getElementById("result").innerHTML = "Please enter numbers";
    return;
  }

  let arr = input.split(",").map(Number);
  let result = "";

  // Remove duplicates
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  // Frequency count
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Find max (without Math.max)
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Sum of array
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  result += `<b>Unique:</b> ${unique}<br>`;
  result += `<b>Frequency:</b> ${JSON.stringify(freq)}<br>`;
  result += `<b>Max:</b> ${max}<br>`;
  result += `<b>Sum:</b> ${sum}`;

  document.getElementById("result").innerHTML = result;
}
