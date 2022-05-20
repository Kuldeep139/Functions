// Question 1 : Create one function with zero parameter having a console statement;
function Div() {
    console.log("div");
}

Div()

// Questtion 2 - Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function Addition(a,b) {
    console.log(a+b);
}
Addition(3,4)

//Question 3 - Create one arrow function:

const Multiplication = (x,y) => {
    console.log(x*y);
}
Multiplication(2,2)

// Question 4 - "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    // var x = 20;
};
girl ();

// Soln: Undefined

// Question 5 - "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Soln: 21

// Question 6 - "Print output

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// Soln: ReferenceError: a not defined

// Question 7 - Write a function that accepts parameter n and returns factorial of n


function factorial(n){
  let f = 1;
  for(let i=1; i<=n ; i++)
  {
    f= f*i;
  }
  console.log(f);
}
factorial(5);