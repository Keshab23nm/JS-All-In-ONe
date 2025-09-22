// control statement 
// if else if  else

let num = prompt("Enter the number :");
num = parseFloat(num);

if (num >= 90 && num <= 100) {
    console.log("A+");
} else if (num >= 80 && num <= 89) {
    console.log("A");
} else if (num >= 70 && num <= 79) {
    console.log("B+");
} else if (num >= 60 && num <= 69) {
    console.log("B");
} else if (num >= 50 && num <= 59) {
    console.log("C+");
} else if (num >= 40 && num <= 49) {
    console.log("D");
} else if (num >= 30 && num <= 39) {
    console.log("F");
} else {
    console.log("Invalid number");
}