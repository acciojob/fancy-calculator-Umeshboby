// const firstInput = prompt("Enter first number");
// 	const multiply =  (firstInput)*2;
//  const secondInput = prompt("Enter second number");
//  const final = multiply + secondInput;
// alert("the final result is"+final );

// Take input for the first variable and multiply it by 2
const firstInput = prompt("Enter the first number:");
const multipliedResult = parseFloat(firstInput) * 2;

// Take input for the second variable
const secondInput = prompt("Enter the second number:");

// Add the second input to the result of the first input multiplied by 2
const finalResult = multipliedResult + parseFloat(secondInput);

// Display the final result using alert()
alert("The final result is: " + finalResult);
