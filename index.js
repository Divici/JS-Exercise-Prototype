/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood){
  if(this.stomach.length < 10){
    this.stomach.push(someFood);
  }
};

Person.prototype.poop = function(){
  this.stomach.splice(0);
};

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};

const kyler= new Person('Kylar', 25);

console.log(kyler.toString());
kyler.eat('pizza');
kyler.eat('burgers');
kyler.eat('rice and chicken');
kyler.eat('steak');
kyler.eat('mac n cheese');
console.log(kyler.stomach);
kyler.poop();
console.log(kyler.stomach);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
}
Car.prototype.drive = function(distance){
  this.odometer += distance;
  this.tank -= (distance / this.milesPerGallon);
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
 this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. In window binding the value of 'this' is the window/console object.
  2. Implicit is looking to the left of the invocation. eg array.splice()
  3. With explicit binding we override the constructor and tell it what 'this should be by using .call, .apply or .bind.
  4. With new binding a new object is constructed and the 'this' binding is set to it.
*/

// Window binding -if we haven't given 'this' any context it will return the window, the global object in node or undefined in strict mode.
// Implicit binding - Applies to objects with methods. When the function (method) is invoked, look the the left of the dot, that's what 'this' refers to.
// Explicit binding - we tell a function what the 'this' keyword should be using .call, .apply or .bind. Call will immediately invoke the function and you pass in your arguments 1 by 1. Apply will immediately invoke the function and you pass in your arguments as an array. Bind you pass in your arguments 1 by 1, but it will not immediately invoke the function, instead it returns a brand new function that can be invoked later.
// New binding - When a function is invoked with a new keyword the this keyword inside that function is bound to the new object being constructed. When a function is invoked as a constructor function using the new keyword, this points to the new object that’s created

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}