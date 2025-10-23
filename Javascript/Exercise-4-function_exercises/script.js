//1. 
//create function without if...else, and use the arrow function.
    //way-1
    //Inside { ... }, you need an explicit return statement — otherwise, the function won’t return anything (it will always return undefined).
    const checkAge = (age) => {
        return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
    };

    //even shorter (no curly braces → implicit return):

    const checkAge2 = age => (age > 18) ? true : confirm('Do you have your parents permission to access this page?');

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

    function pow(x,n) {
        let result = 1; 
        for(let i=0; i < n; i++){
            result *= x;
        }
        return result;
    }
    // Examples:
    console.log(pow(3, 2));   // 9
    console.log(pow(3, 3));   // 27
    console.log(pow(1, 100)); // 1

//Exercise 3
//Replace Function Expressions with arrow functions in the code:

//  function ask(question, yes, no) {
//      if (confirm(question)) yes()
//      else no()
//  }

//  ask(
//      "Do you agree?",
//      function() { alert("You agreed.") },
//      function() { alert("You canceled the execution.") }
//  )

    const ask = (question, yes, no) =>  (confirm(question)) ? yes() : no();
    ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
    )

//Exercise 4 
//Create an object calculator with three methods.


    let calculator = {
        a: 0,
        b: 0,
        read: function() {
            this.a = Number(prompt("Enter the first number:", 0));
            this.b = Number(prompt("Enter the second number:", 0));
        
        },
        sum: function() {
            return this.a + this.b;

        },
        mul() { //with arrow function
            return this.a * this.b;

        }

    };
    
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );

//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

    const min = (a, b) => (a < b ? a : b);

    // Examples:
    console.log(min(3, 5));  // 3
    console.log(min(10, 7)); // 7
    console.log(min(4, 4));  // 4