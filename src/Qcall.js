export default call = (type, url, data, onSucces, onError) => {
  const request = new XMLHttpRequest();
  const openRequest = () => request.open(type, url, true);
  if (type === "POST") {
    openRequest();
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send(data);
  } else if (type === "GET") {
    openRequest();
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        console.log(succes)
        onSucces 
        var req = request
        var res = this.response;
      } else {
        console.error("server error", 500)
      }
    };

    request.onerror = onError

    request.send();
  }
};
