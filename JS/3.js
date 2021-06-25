function MultiplicatorUnitFailure() {};

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5) return a * b;
  else throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  let x = 0;
  try {
    x = primitiveMultiply(a, b);
  } catch {
    x = reliableMultiply(a, b);
  }
  return x;
};

console.log(reliableMultiply(8, 8));
