
const menu = {};

menu._meal = '';
menu._price = 0;
//Assigning value
menu._meal = 123; 
menu._price = 'abc'; 

console.log(menu); 

//check the meal
Object.defineProperty(menu, 'meal', {
    //set keyword to check the values being entered
  set: function(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  }
});

//check the price
Object.defineProperty(menu, 'price', {
  set: function(priceToCheck) {
    //check datatype of the value we use typeof keyword
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  }
});

//Assigning new value 
menu.meal = 'Spaghetti'; 
menu.price = 5;

console.log(menu); 


Object.defineProperty(menu, 'todaysSpecial', {
    //use get keyword to access value stored 
  get: function() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
});

//output
console.log(menu.todaysSpecial); 
