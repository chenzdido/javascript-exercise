function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  //1.create request
  //1.1 create XMLobject
  //1.2 set url.method.header
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  //2.register success and failur callback
  //2.1 register one big callback
  xhr.onreadystatechange = function() {
    //2.1.1 register success callback
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.readyState <= 299) {
      successCallback(xhr);
    }
    //2.1.2 register failur callback
    if (xhr.readyState === 4 && (xhr.status < 200 || xhr.readyState > 299)) {
      errorCallback(xhr);
    }
  };
  //3.send request
  xhr.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
