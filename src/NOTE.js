// Arrow Functions
// Arrow functions are a useful new feature of ES6. With arrow functions, you can create functions without using the function keyword. You also often do not have to use the return keyword. Let’s consider a function that takes in a firstName and returns a string, turning the person into a lord. Anyone can be a lord:

const lordify = function(firstName) {
  return `${firstName} of Canterbury`;
};

console.log(lordify("Dale")); // Dale of Canterbury
console.log(lordify("Gail")); // Gail of Canterbury

//With an arrow function, we can simplify the syntax tremendously:
const lordify = firstName => `${firstName} of Canterbury`;

// With the arrow, we now have an entire function declaration on one line. The function keyword is removed. We also remove return because the arrow points to what should be returned. Another benefit is that if the function only takes one argument, we can remove the parentheses around the arguments.

// More than one argument should be surrounded by parentheses:
// Typical function
const lordify = function(firstName, land) {
    return `${firstName} of ${land}`;
  };



// RETURNING OBJECTS
// What happens if you want to return an object? Consider a function called person that builds an object based on parameters passed in for firstName and lastName:

const person = (firstName, lastName) =>
    {
        first: firstName,
        last: lastName
    }

console.log(person("Brad", "Janson"));
// As soon as you run this, you’ll see the error: Uncaught SyntaxError: Unexpected token :. To fix this, just wrap the object you’re returning with parentheses:
const person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
  });
  
  console.log(person("Flad", "Hanson"));
//   These missing parentheses are the source of countless bugs in JavaScript and React apps, so it’s important to remember this one!