function analyze() {
  let num = Number(document.getElementById("numInput").value);
  let result = "";

  if (isNaN(num)) {
    result = "Please enter a valid number";
  } else {

    // Positive / Negative / Zero
    if (num === 0) {
      result += "Number is Zero<br>";
    } else if (num > 0) {
      result += "Positive Number<br>";
    } else {
      result += "Negative Number<br>";
    }

    // Even / Odd
    result += (num % 2 === 0) ? "Even Number<br>" : "Odd Number<br>";

    // Divisible by 3 & 5
    if (num % 3 === 0 && num % 5 === 0) {
      result += "Divisible by 3 and 5";
    } else {
      result += "Not divisible by 3 and 5";
    }
  }

  document.getElementById("result").innerHTML = result;
}
