function mutiple(x, y) {
  if (x < 10 && y < 10) {
    return x * y;
  }
  const { a, b, c, d, n, m } = splitNumber(x, y);

  const ac = mutiple(a, c);
  const bd = mutiple(b, d);
  const sum = mutiple(a + b, c + d);
  const sub = sum - ac - bd;

  return ac * 10 ** n + bd + sub * 10 ** m;
}

function splitNumber(x, y) {
  const n = Math.ceil(Math.max(Math.log10(x), Math.log10(y)));
  const m = Math.ceil(n / 2);

  const a = Math.floor(x / 10 ** m);
  const b = x % 10 ** m;

  const c = Math.floor(y / 10 ** m);
  const d = y % 10 ** m;
  return { a, b, c, d, n, m };
}

export { mutiple, splitNumber };
