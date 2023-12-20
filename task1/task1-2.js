const firstNumberPrompt = prompt("Pls enter a number", "");

function isNumberValid(value) {
  return (
    value !== null && value !== "" && !isNaN(+value) && Number.isFinite(+value)
  );
}

if (isNumberValid(firstNumberPrompt)) {
  const secondNumberPrompt = prompt("Pls enter another number", "");
  if (isNumberValid(secondNumberPrompt)) {
    console.log(
      `Answer is: ${+firstNumberPrompt + +secondNumberPrompt}, ${
        +firstNumberPrompt / +secondNumberPrompt
      }`
    );
  } else {
    console.log("Incorrect!");
  }
} else {
  console.log("Incorrect!");
}


