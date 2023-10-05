/* 
  Create a variable for each combination number
  Use arithmetic operators (+, -) to declare the desired amount for each variable
  Concatenate the numbers in a alert pop up with text
*/

// These are the 3 variables for the combination lock

// Here the arithmetic operators use an equation to get to the desired number and then they declare that as the value for the variable
let num1 = (100 / 2 - 40 + 60 / 6 - 10) 
let num2 = 500 % 5 + 40
let num3 = ((51 + 51) - 21) / 2 - 1.5

// This puts all of the combination numbers and text into an alert that is sent when the screen loads
alert(`Congratulations for being selected to Secure the Secret Vault. The combination lock is: ${num1} - ${num2} - ${num3} ` )