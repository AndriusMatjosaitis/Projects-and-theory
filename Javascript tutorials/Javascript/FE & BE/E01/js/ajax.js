// JavaScript Document

window.onload = function() {

//fetch html
    document.getElementById("button").onclick = function() {
        
        // 1. XHR is a JavaScript predefined object
        let xhr = new XMLHttpRequest();
        // 2. We specify request method and address
        xhr.open('GET', 'remote/data.html');
        // 3. We send the request
        xhr.send();
        // 4. We add an event listener, waiting for the answer
        xhr.onload = function(data) {
            console.log(data);
          //we do something with the data obtained
          document.getElementById("test1").innerHTML = data.target.response;
        };
        
    }

}
