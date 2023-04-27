function solution(n, m, x, y, r, c, k) {
  function move(i, j, path) {
    if (i <= 0 || i > n || j <= 0 || j > m) return;

    const shortest = Math.abs(r - i) + Math.abs(c - j);
    if (shortest > k - path.length || shortest % 2 != (k - path.length) % 2)
      return;

    if (path.length === k) {
      if (i == r && j == c) return path;
      return;
    }
    return (
      move(i + 1, j, path + "d") ??
      move(i, j - 1, path + "l") ??
      move(i, j + 1, path + "r") ??
      move(i - 1, j, path + "u")
    );
  }

  return move(x, y, "") ?? "impossible";
}
