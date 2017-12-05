var Car = function Car(year, make, model){
    var vehicleYear = year,
    var vehicleMake =make,
    var vehicleModel =model;

    return {
        Year: this.vehicleYear,
        Make: this.vehicleMake,
        GetFullName: function(){
        var year = vehicleYear,
            make = vehicleMake;
            model = vehicleModel;
         return year + " " + make + " " + model; 
    }}

}

var myCar = new Car(2010, "Ford", "F-250")
