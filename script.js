var isDate = function (input) {
  // If input is already a Date object
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return !isNaN(input.getTime());
  }

  // Try to parse anything else (string, number, etc.)
  const parsed = new Date(input);
  return !isNaN(parsed.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
const result = isDate(input);
alert(result);

