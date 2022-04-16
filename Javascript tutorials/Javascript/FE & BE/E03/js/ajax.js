// JavaScript Document

window.onload = function() {

    //fetch json
    document.getElementById("button").onclick = function() {

        var adr = 'data.json';
        
        fetch(adr).then(function(response) {

            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error encountered");
            }
        }).then(function(data) {

            //create a DOM element with obtained data
            var newItem = document.createElement("tr");

            var td1 = document.createElement("td");
            td1.innerText = data.hour;
            var td2 = document.createElement("td");
            td2.innerText = data.temp;
            var td3 = document.createElement("td");
            td3.innerText = data.wind;
            var td4 = document.createElement("td");
            td4.innerText = data.rain;

            newItem.appendChild(td1);
            newItem.appendChild(td2);
            newItem.appendChild(td3);
            newItem.appendChild(td4);
            
            document.querySelector("#table1").appendChild(newItem);

        })
                .catch(function(error) {
                    alert(error);
                });

    }

}
