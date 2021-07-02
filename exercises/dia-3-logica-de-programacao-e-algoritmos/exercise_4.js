let n = 5;
let symbol = '*';
let inputLine = '';
let mid = (n+1) / 2;
let controlRight = mid;
let controlLeft = mid;

for (let i = 0; i < mid; i += 1) {
  for (let j = 0; j <= n; j += 1) {
    if (j >= controlLeft && j <= controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight+=1;
  controlLeft-=1
 
};