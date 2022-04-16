function t() {
	var count = 6;
  return function () {
  	count ++;
     return count;
  }
}

const tFunc = t();

let count = tFunc(); /// 7

const tFunc2 = t();

let z = tFunc2(); /// 7
count = tFunc(); /// 8
console.log(count);






class Person { /// kaip paslepti kintamaji
	constructor(password) {
  	const _password = password
    this.getPassword = function() {
    	return _password;
    }
  }
}
const person = new Person ("123");
person.password = 346;
console.log(person.getPassword());




class Person { /// kaip paslepti kintamaji
	constructor(password) {
  	let _password = password
    this.setPassword = function (newPassword) {
    	_password = newPassword;
    }
    this.getPassword = function() {
    	return _password;
    }
  }
}
const person = new Person ("123");
const person2 = new Person ("777");
person.setPassword("324");
console.log(person.getPassword()); /// 324
console.log(person2.getPassword()); /// 777





const promise = new Promise(function(funcSucc, funcError) { ///proto resolved rejected promisai
	const result = 10;
  if(result < 5) {
  	funcSucc();
  }
  else {
  	funcError()
  }
})
console.log(promise);





const promise = fetch('https://jobs.github.com/positions.json?limit=1', {  ///kaip veikia sinchroniskumas
    method: 'GET',
    headers: {
        'Access Control Allow Origin':'*',
    },
    mode: 'no-cors' /// pasakyt kad galima kreiptis i kita url
})
console.log("Sinchroninis kodas pradzia", z);
promise.then(result => {console.log(result, "result")}).catch(error => {console.log(error, "error")})        
console.log("sinchroninis kodas", z);





const promiseToGithub = new Promise((resolve, reject) => {
    resolve()
})





console.log("Sinchroninis kodas pradzia");

fetch(`https://restcountries.eu/rest/v2/all`)
.then(response=>response.json())
.then(data => console.log(data))

console.log(`Sinchroninis kodas`);

//atfiltruoti countries pagal regionus
.then(countries => {
  const regions = [];
  countries.forEach(countryObject => {
    const countryRegion = countryObject.region;
    console.log(countryRegion);
    //atfiltruoti pagal regionus
    let isInArray = false;
    for(let i = 0; i < regions.length; i++) {
      if(regions[i] === countryRegion) {
        isInArray = true;
        break;
    }
  })
}


.then(countries => {
  const regions = [];
  countries.forEach(countryObject => {
    const countryRegion = countryObject.region;
    let isInArray = regions.find(function(elem){
      return elem === countryRegion
    });
    if(!isInArray && countryRegion) { //countryRegion patikrina ar netuscias stringas
      regions.push(countryRegion);
    }
  });
  console.log(regions);
})

console.log("Sinchroninis kodas");
//if "" || NaN || 0 || null || undefined || false
//if( {} && [] ) true
//visi skaiciai (ir neigiami) isskyrus 0 yra true



.then(countries => {
    const regions = {};
    countries.forEach(countryObject => {
        const countryRegion = countryObject.region;
        if(countryRegion) {
            regions[countryRegion] = [];
        }
  });
  console.log(regions);
})

console.log("Sinchroninis kodas");