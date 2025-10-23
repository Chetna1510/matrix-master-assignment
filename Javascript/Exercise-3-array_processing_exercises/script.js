//Exercise 1

    let age = [32, 33, 12, 40];

    function filterRange(a, b) {
    // return a function that will be called for each element by filter
    console.log(b);
    return function(item) {
        return item >= a && item <= b;
    }
    }

    let filtered = age.filter(filterRange(33, 88));

    console.log(filtered); // [32, 33, 40]
    console.log(age);      // [32, 33, 12, 40] (original array not modified)

//Exercises 2 - map
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

    const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    const name = users.map(user => user.name);
    console.log(name); /// ["Alice", "Bob", "Charlie"]

//Exercises 3 - reduce
//Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

    const users2 = [
        { name: "Alice", age: 40 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    function getAverageAge(users) {
        
        const totalAge = users.reduce((sum, user) => sum + user.age, 0);
        return totalAge / users.length;
    }
      
    console.log('Average Age: ' + getAverageAge(users2));

