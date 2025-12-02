const students = [
  { name: "Alice", scores: [90, 85, 88], scholarship: false },
  { name: "Bob", scores: [70, 75, 72], scholarship: false },
  { name: "Charlie", scores: [95, 92, 96], scholarship: false },
  { name: "Diana", scores: [88, 90, 84], scholarship: false },
  { name: "Eve", scores: [60, 65, 70], scholarship: false },
];

const getStudents = () => {
  const filterGrades = students.filter((s) => {
    const average =
      s.scores.reduce((sum, item) => sum + item, 0) / s.scores.length;
    return average >= 85;
  });

  const mappedStudents = filterGrades.map((student) => {
    const average =
      student.scores.reduce((sum, item) => sum + item, 0) /
      student.scores.length;

    return { name: student.name, average: average };
  });

  const [first, second, ...others] = mappedStudents;

  // ✅ Return structured JSON
  return { first, second, others };
};

console.log(getStudents());
