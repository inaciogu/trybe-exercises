const winner = (betNumber, luckyNumber) => betNumber === luckyNumber;

const result = (betNumber) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1;

  if (luckyNumber === betNumber) {
    return `Parabéns`
  } else {
    return `try again`
  }
}
console.log(result(2, winner));