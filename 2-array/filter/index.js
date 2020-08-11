function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = [collection[0]];
  collection.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
  // return new Set(collection);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
