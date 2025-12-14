/* const students = [
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



const data = {
 items: ["pen", "book", "laptop"]
};

const {
 items: [first, ...rest]
} = data;

console.log(first, rest);
 */
/* 
const online = [
  { id: 1, customer: "Alice", items: 3, total: 1200 },
  { id: 2, customer: "Bob", items: 1, total: 300 },
  { id: 3, customer: "Charlie", items: 5, total: 2500 },
  { id: 4, customer: "David", items: 2, total: 800 },
  { id: 5, customer: "Eve", items: 4, total: 1600 },
];

const OnlineStoreOrders = () => {
  const filterTotal = online.filter((f) => f.total > 1000);

  const mappedTotal = filterTotal.map((f) => {
    const returnTotal = f.total;
    return { customerName: f.customer, Total: returnTotal };
  });
  const finalTotal =
    mappedTotal.reduce((sum, items) => sum + items.Total, 0) /
    mappedTotal.length;

  const highValueCustomers = online
    .filter(({ total }) => total > 1000)
    .map(({ customer }) => customer);

  const stats = online.reduce(
    (acc, { total, items }) => {
      acc.grandTotal += total;
      acc.totalItems += items;
      return acc;
    },
    { grandTotal: 0, totalItems: 0 }
  );
  const [first, second, ...last] = mappedTotal;

  return { first, second, last, finalTotal, highValueCustomers, stats };
};

console.log(OnlineStoreOrders());
 */

const cart = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Headphones", price: 150, inStock: true },
  { name: "Keyboard", price: 100, inStock: true },
];

const CartShop = (stock) => {
  const filterProductOut = cart.filter((p) => (p.inStock = stock));

  const getNamePrice = filterProductOut.map(
    (itemName) => `${itemName.name},$${itemName.price}`
  );

  const totalPrices = filterProductOut.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const [first, second] = filterProductOut;

  const checkItem = filterProductOut
    .map((item) => item.name)
    .indexOf("keyboard");

  return {
    filterProductOut,
    getNamePrice,
    totalPrices,
    first,
    second,
    checkItem,
  };
};

console.log(CartShop(true));
