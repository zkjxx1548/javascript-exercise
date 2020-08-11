function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  return fetch(url, options).then(response => response.json());
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
