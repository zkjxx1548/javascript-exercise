export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const result = Object.assign({}, source);
  result.serialNumber = '12345';
  result.properties.status = 'processed';
  return result;
}
