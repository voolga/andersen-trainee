const 
      codefirstNumberPrompt = prompt("Pls enter a number", ""),
      secondNumberPrompt = prompt(
    "Pls enter another number from 2 to 36 (that will be the number system)",
    ""
  );

function isNumberValid(value) {
  return (
    value !== null && value !== "" && !isNaN(+value) && Number.isFinite(+value)
  );
}

function isNumberSystemValid(value) {
  return +value >= 2 && +value <= 36;
}

if (
  isNumberValid(firstNumberPrompt) &&
  isNumberValid(secondNumberPrompt) &&
  isNumberSystemValid(secondNumberPrompt)
) {
  console.log((+firstNumberPrompt).toString(+secondNumberPrompt));
} else {
  console.log("Incorrect!");
}
