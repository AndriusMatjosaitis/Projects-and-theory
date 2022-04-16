// Let’s think of a class architecture for application about cities and countries. 
// For example it can be a geographical application, like a tour guide or some encyclopedia. 
// What properties and methods should be implemented in City and Country objects?
// Implement constructors for these objects in classic notation

//constructor of City class
function City(name, population, description){
    this.name = name;
    this.population = population;
    this.description = description;
    
    this.info = function() {
        console.log('City of ' + this.name + ' with population of ' + this.population + '. ' + this.description);
    }
};

//constructor of Country class
function Country(name, area, population, capital, cities){
    this.name = name;
    this.area = area;
    this.population = population;
    this.capital = capital;
    this.cities = cities;
    
    //outputting some information, including this about the internal objects        
    this.info = function() {
        console.log('Country of ' + this.name + ' with population of ' + this.population);
        console.log('Capital city: ' + this.capital.name);
        console.log('Other cities: ');
        
        //iterating over array of City objects
        for(let i of this.cities) {
            console.log(i.name);
        }
    }
}

//creating a City object and calling its method
var capital = new City('London', 9000000, 'Test description 1');
capital.info();

var b = new City('Birmingham', 2500000, 'Test description 2');
var c = new City('Manchester', 2000000, 'Test description 3');
var d = new City('Glasgow', 1000000, 'Test description 4');
var cities = [b, c, d];

//creating a Country, with City objects as capital and other cities
var britain = new Country('Great Britain', 242000, 66000000, capital, cities);
britain.info();