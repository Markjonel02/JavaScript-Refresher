/* const sample = [1, 2, 3, 4, 5];

const [first, second, ...remaining] = sample;

const result = sample
  .filter((s) => s % 2 === 0) // keep odd numbers
  .map((s) => s); // return the number itself

console.log(result); // [1, 3, 5]
 */

const employees = [
  { name: "Mark", role: "Web Developer", salary: 35000 },
  { name: "Jane", role: "Designer", salary: 28000 },
  { name: "Carlos", role: "Project Manager", salary: 50000 },
  { name: "Anna", role: "QA Engineer", salary: 32000 },
  { name: "Leo", role: "Intern", salary: 15000 },
];

// TODO: Filter, map, and destructure
function getBonuses() {
  // Step 1: Filter employees with salary > 30000
  const highEarners = employees.filter((emp) => emp.salary > 30000);

  // Step 2: Map to { name, bonus }
  const bonuses = highEarners.map((emp) => ({
    name: emp.name,
    bonus: emp.salary * 0.1,
  }));

  // Step 3: Destructure top two and others
  const [first, second, ...others] = bonuses;

  return { first, second, others };
}

console.log("Bonuses:", getBonuses());
