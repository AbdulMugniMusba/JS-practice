let marks = 38;
let result;
let grade;

if (marks >= 90) {
  grade = "A";
  result = " You scored Distinction";
} else if (marks >= 60) {
  grade = "B";
  result = "You scored First Class";
} else if (marks >= 45) {
  grade = "C";
  result = " You scored Second Class";
} else if (marks >= 40) {
  grade = "E";
  result = " You scored Third Class";
} else {
  grade = "F";
  result = "You Faild";
}
console.log(` Your grade is ${grade} and ${result}`);
