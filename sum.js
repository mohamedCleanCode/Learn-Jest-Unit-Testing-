function sumNums(...numbers) {
  // ( any || null )
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
module.exports = sumNums;
