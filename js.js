// Exercise 1
// The following function returns true if the parameter age is greater than 18.

// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

let age =10;
age > 18? console.log("true"): console.log("Do you have your parents permission to access this page?");





// Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.



pow();
function pow(x, y){
      return x**y;
};
console.log(pow(10,2))



// Exercise 3
// Replace Function Expressions with arrow functions in the code:
// function ask(question, yes, no) {
//     if (question) yes()
//     else no()
//   }
  
//   ask(
//     "Do you agree?",
//     function() { console.log("You agreed.") },
//     function() { console.log("You canceled the execution.") }
//   )


  function ask(question, yes, no) { 
      if (confirm(question)) yes(); 
      else no(); 
    } 
    ask( 
        "Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution.") );


//   Exercise 4
//   Create an object calculator with three methods:
  
//   read() prompts for two values and saves them as object properties.
//   sum() returns the sum of saved values.
//   mul() multiplies saved values and returns the result.

// let calculator = {
//     // ... your code ...
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );

  var x1 = x2 = null;
  calculator = {
  
    read() {
      this.x1 = prompt("Please enter first number", "");
      this.x2 = prompt("Please enter second number", "");
      return (x1, x2);
    },
    sum(x1, x2) {
      return (Number(this.x1) + Number(this.x2))
    },
    mul(x1, x2) {
      return [this.x1] * [this.x2];
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());




// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. 
// Use arrow function along with the question mark operator ?


let min = (a,b) => (a<b)?  a: (a>b)? b : `${a} equal ${b}}`;

console.log();
console.log("The minimum of the two numbers is:", min(20, 10));
