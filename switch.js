let marks = 40;
let result;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 45) {
  grade = "C";
} else if (marks >= 40) {
  grade = "D";
} else {
  grade = "E";
}
console.log(` Your Grade is :${grade} `);

switch (grade) {
  case "A": // if grade is A
    console.log(" You scored Distinction");
    break;
  case "B": // if grade is B
    console.log("You scored First Class");
    break;
  case "C": // if grade is C
    console.log(" You scored Second Class");
    break;
  case "D": // if gade is D
    console.log(" You scored Third Class");
    break;
  default: // if grade is E
    console.log("You Faild");
    break;
}
