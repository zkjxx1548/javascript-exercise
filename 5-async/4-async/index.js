function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    // eslint-disable-next-line func-names
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr);
      }
      if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status > 299)) {
        reject(xhr);
      }
    };
    xhr.send();
  });
}

async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const xhr = await myFetch(url);
  Response.success(xhr);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
