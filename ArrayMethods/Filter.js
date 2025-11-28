const Filteruser = (name, isactive) => {
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
