var Car = function Car(year,make,model){
    // var this = {}; // This is *like* what happens
    this.vehicleYear = year;
    this.vehicleMake = make;
    this.vehicleModel = model;
    // return this;
};


var myCar = new Car(2012, "Ford", "Fusion");

console.log(myCar.vehicleMake);

var myOtherCar = Car(2015, "Toyota", "Tundra");

console.log(myOtherCar.vehicleMake);