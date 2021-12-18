function mutiple(a, b) {
  return a * b;
}

function splitNumber(num) {
  const digital = Math.ceil(Math.log10(num));
  const base = 10 ** Math.ceil(digital / 2);
  return [Math.trunc(num / base), num % base];
}

export {mutiple, splitNumber};
