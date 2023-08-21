let output = [];
let a = 17,
  x = 27,
  c = 43,
  m = 100;
for (i = 0; i < 100; i++) {
  x = (a * x + c) % 100;

  let isDuplicate = false;
  for (j = 0; j < output.length; j++) {
    if (output[j] === x) {
      isDuplicate = true;
    }
  }
  if (isDuplicate) {
    break;
  }
  output.push(x);
}
console.log(output);
