async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.readyState <= 299) {
        resolve(xhr);
      }
      if (xhr.readyState === 4 && (xhr.status < 200 || xhr.readyState > 299)) {
        reject(xhr);
      }
    };
    xhr.send();
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
