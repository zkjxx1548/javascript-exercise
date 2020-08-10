function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  fetch(url, options).then(response => {
    if (response.status >= 200 && response.status <= 299) {
      Response.success(response);
    } else {
      Response.failure(response);
    }
  });
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
