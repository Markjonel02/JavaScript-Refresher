const Mapping = () => {
  const names = ["mark", "jonel", "relles"];
  const mapNames = names.map(
    (n) => n.charAt(0).toLocaleUpperCase() + n.slice(1)
  );
  return mapNames;
};

console.log(Mapping());
