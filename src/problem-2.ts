{
  function removeDuplicates(array: number[]): number[] {
    const newArray: number[] = [];
    const valueExists: { [key: number]: boolean } = {};

    for (let i = 0; i < array.length; i++) {
      if (!valueExists[array[i]]) {
        newArray.push(array[i]);
        valueExists[array[i]] = true;
      }
    }
    return newArray;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
