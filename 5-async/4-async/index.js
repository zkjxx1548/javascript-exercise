async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const xhr = await fetch(url, { method: 'GET' });
  const xhrJson = await xhr.json();
  console.log(xhrJson);
  document.write(xhrJson.name);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
