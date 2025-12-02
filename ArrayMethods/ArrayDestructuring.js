/* const sample = [1, 2, 3, 4, 5];

const [first, second, ...remaining] = sample;

const result = sample
  .filter((s) => s % 2 === 0) // keep odd numbers
  .map((s) => s); // return the number itself

console.log(result); // [1, 3, 5]
 */

/* const employees = [
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
 */
/* 
const cart = [
  { name: "Laptop", price: 45000, quantity: 1, discountEligible: true },
  { name: "Mouse", price: 800, quantity: 2, discountEligible: false },
  { name: "Keyboard", price: 1500, quantity: 1, discountEligible: true },
  { name: "Monitor", price: 12000, quantity: 2, discountEligible: true },
  { name: "Headphones", price: 2500, quantity: 1, discountEligible: false },
];

const getDiscount = () => {
  const filterEligible = cart.filter((e) => e.discountEligible === true);

  const mapEligible = filterEligible.map((items) => {
    const subtotal = items.price * items.quantity;
    const discount = subtotal * 0.1;
    return { name: items.name, subtotal, discount };
  });

  const totalSvings = mapEligible.reduce((sum, item) => sum + item.discount, 0);

  const [first, second, ...others] = mapEligible;

  return {
    first,
    second,
    others,
    totalSvings,
  };
};

console.log("All Save Discount:", getDiscount());
 */

const players = [
  { name: "Jordan", team: "Bulls", points: [30, 28, 35, 40] },
  { name: "Kobe", team: "Lakers", points: [25, 20, 22, 27] },
  { name: "LeBron", team: "Cavs", points: [18, 15, 20, 19] },
  { name: "Curry", team: "Warriors", points: [32, 29, 34, 31] },
  { name: "Durant", team: "Nets", points: [26, 24, 28, 30] },
];

const PlayerAnalysis = () => {
  const FilterPlayers = players.filter((player) => {
    const ave = player.points.reduce(
      (sum, point) => sum + point / player.points.length
    );
    return ave > 20;
  });

  const MapPlayers = FilterPlayers.map((p) => {
    const ave =
      p.points.reduce((sum, point) => sum + point, 0) / p.points.length;
    return { name: p.name, team: p.team, average: ave };
  });

  const totalAverage =
    MapPlayers.reduce((sum, p) => sum + p.average, 0) / MapPlayers.length;

  const [first, second, ...others] = MapPlayers;

  return {
    first,
    second,
    others,
    totalAverage,
  };
};

console.log("the highest Points per game is: ", PlayerAnalysis());
