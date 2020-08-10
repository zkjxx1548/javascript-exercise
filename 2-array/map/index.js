export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  return collection.map(number => {
    const index = (number - 1) % 26;
    return letters[index];
  });
}
