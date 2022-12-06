function sumNums(...numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
module.exports = sumNums;
