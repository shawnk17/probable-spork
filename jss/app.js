// var customer1 = new Customer("shawn", "dholakia");
// var customer2 = new Customer("joe", "dirt");
// var customers = [customer1, customer2];

// var num =1;
// for(var i=0; < 10; i++) {
//     num += i;
// }
// console.log(customer.firstName);

// var customer ={};

// customer.firstName ="shawn";
// customer.lastName ="dho";

// var customer = {};

// customer.push(customer);

// console.log(customer{0}.pop);

// var customer2

var Customer = function Customer(first, last){
    this.fristName = first;
    this.lastName =last;

    this.greet = function greet(){
        return "Hello, " this.fristName + "" + this.lastName +"1";
    }
}

var myCustomer = new Customer("scobbie", "");

