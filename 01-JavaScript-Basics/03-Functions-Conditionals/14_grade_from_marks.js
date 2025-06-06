//Find the grade (A/B/C) from marks
//Input: 85 → Output: "A"

function grade(marks) {
  if (marks >= 95) return `A+`;
  else if (marks >= 85) return `A`;
  else if (marks >= 60) return `B`;
  else if (marks >= 40) return `C`;
  else return `F`;
}
console.log(grade(60))
