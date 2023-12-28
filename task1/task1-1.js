const codefirstNumberPrompt = prompt("Pls enter a number", "");
const secondNumberPrompt = prompt(
    "Pls enter another number from 2 to 36 (that will be the number system)",
    ""
  );

function isValidInput(value) {
  return (
    value?.length && !isNaN(value) && isFinite(value)
  );
};

function isNumberSystemValid(value) {
  return value >= 2 && value <= 36;
};

const isDataValid = isNumberValid(firstNumberPrompt) &&
                    isNumberValid(secondNumberPrompt) &&
                    isNumberSystemValid(secondNumberPrompt);

if (isDataValid) {
  console.log((+firstNumberPrompt).toString(+secondNumberPrompt));
} else {
  console.log("Incorrect!");
};
