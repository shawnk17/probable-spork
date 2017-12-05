var Vehicle = function Vehicle(year, make, model) {
    this.Year = year;
    this.Make = make;
    this.Model = model;
    this.Foo = "Bar";
};

var Car = function Car(year, make, model, numberOfDoors) {
    Vehicle.call(this, year, make, model);
    this.NumberOfDoors = numberOfDoors;
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var myVeh = new Vehicle(2016, "Honda", "C-RV");

var myCar = new Car(2018, "Tesla", "Model Roadster");


console.log(myCar.Foo);

console.log(myCar instanceof Car);

console.log(myCar instanceof Vehicle);

console.log(myCar instanceof Object);

console.log(myVeh instanceof Car);
console.log(myVeh instanceof Vehicle);
console.log(myVeh instanceof Object);

console.log({} instanceof Object);
console.log([] instanceof Object);