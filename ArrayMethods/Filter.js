/* const Filteruser = (name, isactive) => {
  const users = [
    { name: "mark", isactive: true },
    { name: "relles", isactive: false },
    { name: "daep", isactive: true },
  ];
  const filters = users.filter((usr) => usr.isactive === false);
  return filters;
};

console.log(Filteruser());

const users = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "pending" },
  { id: 3, name: "Charlie", status: "active" },
  { id: 4, name: "Diana", status: "pending" },
  { id: 5, name: "Eve", status: "pending" },
];

// TODO: Filter only active users
const activeUsers = users
  .filter((u) => u.status === "active")
  .map((user) => user.name);

console.log(activeUsers); // Output: ['Alice', 'Charlie', 'Eve']5

const movies = [
  { title: "Inception", genre: "sci-fi" },
  { title: "The Dark Knight", genre: "action" },
  { title: "Interstellar", genre: "sci-fi" },
  { title: "The Notebook", genre: "romance" },
  { title: "Avengers: Endgame", genre: "action" },
];

function Filteredovies(genre) {
  const filteredmovies = movies
    .filter((m) => m.genre.toLowerCase() === genre.toLowerCase())
    .map((movie) => "title: " + movie.title + ", genre: " + movie.genre);
  return filteredmovies;
}

console.log(Filteredovies("Sci-Fi"));
console.log(Filteredovies("Action"));

const books = [
  { title: "Clean Code", author: "Robert C. Martin", available: true },
  { title: "You Don’t Know JS", author: "Kyle Simpson", available: false },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    available: true,
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    available: false,
  },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", available: true },
];

function Filterbooks(available) {
  const filterbooks = books
    .filter((b) => b.available === available)
    .map(
      (book) =>
        `Title:${book.title},Author:${book.author},Available:${book.available}`
    );

  return filterbooks;
}

console.log(Filterbooks(true));
 */

/* const scores = [95, 67, 88, 74, 100, 59, 82, 76, 45, 91];

function GetScors() {
  const highscores = scores
    .filter((s) => s >= 75)
    .map((score) => `score: ${score}, status: passing `);
  return highscores;
}
function GetFailingScores(score) {
  const failed = scores.filter(score < 75).map((r) => r);

  if (failed.length === 0) {
    return "All scores are passing.";
  }
  return failed;
}
console.log(GetScors(75));
 */

/* const tasks = [
  { title: "Fix login bug", priority: "high", completed: true },
  { title: "Update documentation", priority: "medium", completed: false },
  { title: "Design new landing page", priority: "low", completed: true },
  { title: "Refactor checkout flow", priority: "high", completed: false },
  { title: "Optimize database queries", priority: "medium", completed: true },
];

function getCompletedTask(completed, priority) {
  const completedtasks = tasks
    .filter((t) => t.completed === completed && t.priority === priority)
    .map(
      (task) =>
        `Title: ${task.title}, Priority: ${task.priority}, Completed: ${task.completed}`
    );

  return completedtasks;
}

console.log(getCompletedTask(true, "low"));
console.log(getCompletedTask(false, "high"));
 */

const orders = [
  { name: "Laptop", price: 45000, quantity: 2, delivered: true },
  { name: "Mouse", price: 800, quantity: 5, delivered: false },
  { name: "Keyboard", price: 1500, quantity: 3, delivered: true },
  { name: "Monitor", price: 12000, quantity: 1, delivered: true },
  { name: "Headphones", price: 2500, quantity: 4, delivered: false },
];
function getDeliveredHighValueOrders() {
  const filteredOrders = orders.filter((o) => o.delivered === true);

  const mappedOrders = filteredOrders.map((order) => ({
    name: order.name,
    totalValue: order.price * order.quantity,
  }));

  const totalValueOrders = mappedOrders.reduce(
    (sum, item) => sum + item.totalValue
  );

  const formattedOrders = totalValueOrders.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  return {
    items: mappedOrders,
    totalValue: formattedOrders,
  };
}

console.log(getDeliveredHighValueOrders());
