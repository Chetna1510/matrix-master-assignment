
//Exercise 1 - destructuring assignment
    let user = {
        name: "John",
        years: 30
    }

    let { name, years: age, isAdmin = false } = user;

    console.log(name);    // "John"
    console.log(age);     // 30
    console.log(isAdmin); // false

//Excercise - const or let

    //The name of our planet
    const ourPlanetName = "Earth";

    // The name of the current visitor
    let currentUserName = "John";

//Exercise 3 - Template Strings

    let phrase = "Hello";

    if (true) {
        let user = "John";
        function sayHi() {
            alert(`${phrase}, ${user}`)
        }
    }

    sayHi();

//Exercise 4 - Spread Operator

    let user2 = {};
    //added properties to user object
    user2.name = "John";
    user2.surname = "Smith";
    //Change the value of the name to Pete.

    user2.name = "Pete";
    //Remove the property name from the object.
    user2 = (({name, ...rest}) => rest) (user2); 

    console.log(user2);

//Exercise 5

    //Is it possible to change an object declared with const, how do you think and why?
    const employee = {
        name: "John"
      }
      
      // does it work?
      employee.name = "Chetna"
    console.log(employee);
    //Answer: Yes! It works
    //Why: const prevents reassignment of the variable itself.
    //But modifying the contents of an object is allowed

//Exercise 6

    let salaries = {
        Fred: 100,
        Ted: 160,
        Ghaith: 130
    }
    // sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
    //way-1
    let sum = 0;

    for (let key in salaries) {
    sum += salaries[key];
    }

    console.log(sum); // 390

    //way-1
    let sum2 = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
    //Object.values(salaries) returns [100, 160, 130].
    console.log(sum2); // 390

//Exercise 7 - ternary operator
    let a = 4;
    let b = 5;
    let result = (a+b < 4) ? 'Below' : 'Over';
    console.log(result);

//Exercise 8 - Rewrite if..else using multiple ternary operators '?'.
    let login = prompt('Write if you are Employee or Director');
    let message = 
        login == 'Employee' ? 'Hello' : 
        login == 'Director' ? 'Greetings' :
        login == '' ? 'No login' : '';

    console.log(message);