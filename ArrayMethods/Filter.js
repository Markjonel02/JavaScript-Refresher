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
