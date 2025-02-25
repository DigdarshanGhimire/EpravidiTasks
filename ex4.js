const grades = ["A", "B", "C", "D", "F"];
const studentData = new Map();

for (let i = 1; i <= 200; i++) {
  const randomGrade = grades[Math.floor(Math.random() * grades.length)];
  studentData.set(`Student${i}`, randomGrade);
}

let students_with_A_grade = [];

for (let grade of studentData.values()) {
  if (grade === "A") {
    students_with_A_grade = true;
    break;
  }
}

const studentsWithBGrade = Array.from(studentData.entries())
  .filter(([name, grade]) => grade === "B")
  .map(([name, grade]) => name);

console.log("At least one student with A grade? ", students_with_A_grade);
console.log("Students with B grade:", studentsWithBGrade);
