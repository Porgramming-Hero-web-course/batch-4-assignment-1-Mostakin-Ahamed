{
  function sumArray(numbers: number[]): number {
    let total: number = 0;

    numbers.forEach((number) => {
      total = total + number;
    });
    return total;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
}
