setInterval(function(){
    let now = new Date();
    document.querySelector("#tictoc").innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }, 1000);