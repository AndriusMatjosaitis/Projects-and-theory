// JavaScript Document

window.onload = function() {

//fetch html
    document.getElementById("button").onclick = function() {
     
        fetch('remote/data.html').then(function(response) {

            console.log(response);
            if (response.ok) {
                return response.text();
            } else {
                throw new Error("Error encountered");
            }
        }).then(function(tekst) {
            document.getElementById("test1").innerHTML = tekst;
        })
        .catch(function(error) {
            alert(error);
        });
        
    }

}
