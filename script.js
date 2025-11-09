var isDate = function (input) {
  //   write your code here if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // If it's a string or number, try to parse it as a date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // For all other types (objects, arrays, etc.), return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
