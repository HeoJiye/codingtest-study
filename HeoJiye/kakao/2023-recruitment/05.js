function solution(commands) {
  let answer = [];
  const cell = Array(51)
    .fill()
    .map((_) => Array(51).fill(""));
  const table = Array(51)
    .fill()
    .map((_, i) =>
      Array(51)
        .fill()
        .map((_, j) => [i, j])
    );

  for (const commandStr of commands) {
    const [command, ...rest] = commandStr.split(" ");

    switch (command) {
      case "UPDATE":
        if (rest.length === 3) update(rest);
        else replace(rest);
        break;
      case "MERGE":
        merge(rest);
        break;
      case "UNMERGE":
        unmerge(rest);
        break;
      case "PRINT":
        answer = [...answer, print(rest)];
        break;
    }
  }

  return answer;

  function update([r, c, value]) {
    const target = find([r, c]);

    iterateAll((i, j) => {
      if (isSameCoords(table[i][j], target)) cell[i][j] = value;
    });
  }

  function replace([value1, value2]) {
    iterateAll((i, j) => {
      if (cell[i][j] === value1) cell[i][j] = value2;
    });
  }

  function merge([r1, c1, r2, c2]) {
    if (r1 === r2 && c1 === c2) return;

    const value = cell[r1][c1] !== "" ? cell[r1][c1] : cell[r2][c2];
    const parent1 = find([r1, c1]);
    const parent2 = find([r2, c2]);

    if (!isSameCoords(parent1, parent2)) {
      table[r2][c2] = parent1;
    }

    iterateAll((i, j) => {
      if (isSameCoords(table[i][j], parent2)) {
        table[i][j] = parent1;
      }
      if (isSameCoords(table[i][j], parent1)) {
        cell[i][j] = value;
      }
    });
  }

  function unmerge([r, c]) {
    const value = cell[r][c];
    const target = find([r, c]);

    iterateAll((i, j) => {
      if (isSameCoords(table[i][j], target)) {
        cell[i][j] = "";
        table[i][j] = [i, j];
      }
    });

    cell[r][c] = value;
  }

  function print([r, c]) {
    return cell[r][c] === "" ? "EMPTY" : cell[r][c];
  }

  function find([r, c]) {
    if (isSameCoords([r, c], table[r][c])) {
      return [Number(r), Number(c)];
    }

    table[r][c] = find(table[r][c]);

    return table[r][c];
  }

  function isSameCoords(coord1, coord2) {
    return coord1.toString() === coord2.toString();
  }

  function iterateAll(callbackFn) {
    for (let i = 0; i < 51; i++) {
      for (let j = 0; j < 51; j++) {
        callbackFn(i, j);
      }
    }
  }
}
