function loop() {
  const totalRows = 10;

  for (let i = 1; i <= totalRows; i++) {
    let space = "";
    let stat = "";

    for (let j = 0; j < totalRows - i; j++) {
      space += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      stat += "*";
    }
    console.log(space + stat);
  }
}

console.log(loop());
