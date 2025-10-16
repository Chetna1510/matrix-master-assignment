//1. Create a variable to store your age. Write a conditional statement to check if you are old enough to vote (age >= 18), and log a message accordingly.

let age = 31;
if(age >= 18){
    console.log("you are eligible to vote");
}

//2. Write a program that prompts the user for their name. If the name is "John," log "Hello, John!" to the console; otherwise, log "You are not John."

    let username = prompt();
    if(username === "John"){
        console.log( "Hello, John!");
    } else {
        console.log("You are not John");
    }

//3. Write a function that takes two numbers as parameters and returns their sum. Call the function with different numbers to test it.

    function TotalProductQuantities(qty1, qty2) {
        return qty1 + qty2;
    }
    let result = TotalProductQuantities(5,9);
    console.log("Sum of total product quantities:" + result);

//4. Create a function that accepts a string as a parameter and returns the string reversed. For example, "hello" should become "olleh."
    //1 Way: 
    function reverseString(str) {
        // Convert string to array → reverse → join back to string
        let ans = str.split('').reverse().join(''); //reverse is an array method
        return ans;
    }

    let s = "Hello";
    console.log("Reversible string:" + reverseString(s));

    //2way: 

    function anotherWayOfReverseString(str) {
        // spread string to array -> reverse -> join back to string
        let ans2 = [...str].reverse().join('');
        return ans2;
    }

    let s2 = "Hello My Name is Chetna";
    console.log("Reversible string2:" + anotherWayOfReverseString(s2));

//5. Create an array of your favorite fruits. Use a `for` loop to log each fruit to the console.

let favFruits = ["Mango", "Banana", "Kiwi", "Grapes"];
for(let i=0; i<favFruits.length; i++){
    console.log(favFruits[i]);
}

//6. Write a function that takes an array of numbers as a parameter and returns the average of those numbers.
    //First way with for loop
    
    function averageMarks (marks){
        let total = 0;
        for(let i = 0; i< marks.length; i++){
            total += marks[i]; // sum all marks
        }
        let average = total / marks.length; // calculate average after loop
        return average;
    }
    let marks = [80, 90, 70, 85, 95]; // marks of 5 students
    let average = averageMarks(marks);

    console.log("Average marks: " + average);
    
    //2nd way to reduce array method - a reducer function to each element, accumulating a single output value. 

    let marks2 = [80, 90, 70, 85, 95]; // marks of 5 students

    let TotalMarks = marks2.reduce((sum, mark) => sum + mark); 
    let averageMarks2 = TotalMarks / marks2.length;
    console.log('Average Marks2: ' + averageMarks2);

//7. Given an array of numbers, use a loop to find and log the largest number in the array.
    //1st way through loop
    let numbers = [10, 50, 30, 60]; // Use numbers, not strings

    function findHighestNumber(){
        let maxValue = numbers[0];
        for(let i = 1; i < numbers.length; i++){ // start from index 1
            if(numbers[i] > maxValue){
                maxValue = numbers[i]; // update the outer variable
            }
        }
        return maxValue;
    }

    console.log('Highest value: ' + findHighestNumber());

    //2nd way though Math array method
    let numbers2 = [10, 50, 30, 60];
    //“spreads” the array into individual numbers -> then find maximum numbers
    let maxValue2 = Math.max(...numbers);
    console.log("Highest value2: " + maxValue2); 

//8. Create an array of words. Use a `for` loop to construct a sentence by concatenating these words and log it to the console.
    //for loop to convert attay to string
    let statementArray = ["This", "is", "my", "JavaScirpt", "Learning"];
    let statement = '';
    for(let i=0; i<statementArray.length; i++){
        statement +=  statementArray[i];
        if (i < statementArray.length - 1) {
            statement += ' '; // add space between words
        }
    
    }
    console.log(statement);
    //Another way is use Join Method

    let statementArray2 = ["I", "am", "joining", "array", "elements", "to Strong"];
    let statement2 = statementArray2.join(' '); // join words with a space
    console.log(statement2);

//9. Write a function that takes an array of names and a name as a parameter. The function should check if the given name exists in the array and return true or false.
    //first we can find through loop
    let NameArray = ["Ria", "Chetna", "John", "David"];
    function findName (array, nameToFind) {
        for(let i=0; i<array.length; i++){
            if(array[i] === nameToFind ){
                return true;
            }
        }
        return false;
    }
    console.log(findName(NameArray, "Chetna"));
    //2nd with includes() array method that does exactly this:

    let NameArray2 = ["Ria", "Chetna", "John", "David"];

    function findName2(array, nameToFind) {
        return array.includes(nameToFind);
    }

    console.log(findName2(NameArray, "Chetna")); // true
    console.log(findName2(NameArray, "Alex"));   // false

//10. Create an array of even numbers from 1 to 20 using a `for` loop and the `if` statement. Log the resulting array to the console.

    let evenNumbers = [];
    for(let i=0; i<=20; i++){
        if (i % 2 === 0) {
            evenNumbers.push(i); // add even number to the array
        }
    }
    console.log("Even numbers from 1 to 20:", evenNumbers);

//11.Create an object representing a book with properties like title, author, and year. Print the book's details to the console.

    let book = {
        title: 'The Great Gatsby',
        author: "F. Scott Fitzgerald",
        year: 1925
    }

    // Print the book's details
    console.log("Book Details:");
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Year: " + book.year);

// 12. Define an object to represent a person with properties like name, age, and gender. Create a function that takes a person's object as a parameter and prints a message with their information.

    let person = {
        name: 'chetna',
        age: 31,
        gender: 'Female'
    }

    function personDetails(personObj) {
        console.log(`Name: ${personObj.name}`);
        console.log("Age: " + personObj.age);
        console.log("Gender: " + personObj.gender);
        console.log(`Hello, my name is ${personObj.name}, I am ${personObj.age} years old and I am ${personObj.gender}.`);

    }

    personDetails(person);

//13. Create an object that simulates a class representing a car with properties like make, model, and year. Add a method to start the car.
    //Use an object literal:
    let car = {
        make: "Toyota",
        model: "Corolla",
        year: 2022,

        // Method to start the car
        start: function() {
            console.log(`${this.make} ${this.model} is starting... Vroom!`);
        }
    }
    // Call the method
    car.start();

    //Use a a constructor function (closer to a real class)

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.start = function() {
        console.log(`${this.make} ${this.model} is starting from constructor... Vroom!`);
        }
    }
    let myCar = new Car("Honda", "Civic", 2017);
    myCar.start();

//14. Extend the previous car class object with a method to drive the car. Print a message when you start and drive the car instance.

    //1st way: Use an object literal:
    let carDrive = {
        make: "Toyota",
        model: "Corolla",
        year: 2022,

        // Method to start the car
        start: function() {
            console.log(`${this.make} ${this.model} is starting... Vroom!`);
        },
        drive: function(){
            console.log(`${this.make} ${this.model} is now driving!`);
        }
    }
    // Call the methods
    carDrive.start();
    carDrive.drive();

    //2nd way: Use a a constructor function (closer to a real class)

    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.start = function() {
        console.log(`${this.make} ${this.model} is starting from constructor is now driving!`);
        }
    }
    let myCarDrive = new Car("Honda", "Civic", 2017);
    myCarDrive.start();

//15. Use the `window.alert` method to display an alert dialog with a message of your choice when a button is clicked on a webpage.

    // Select the button element
    let button = document.getElementById("alertButton");

    // Add an event listener to the button
    button.addEventListener("click", function() {
      alert("Hello! You clicked the button using an event listener!");
    });

//16. Create a function that uses `window.prompt` to ask the user for their name, then use `window.alert` to greet them with their name.

    function greetUser(){
        let username = window.prompt("What is your name");
        if (username) {
            console.log('inside');
            //window.alert("Hello, " + username + "! Welcome!");
        } else {
            //window.alert("You didn’t enter a name!");
        }
    }

    greetUser();

//17. Create an HTML page with a button and a div element. Write a JavaScript function that changes the text content of the div when the button is clicked.

    // Function to change the div text
    let newQuoteButton = document.getElementById("newQuoteButton");
    let div = document.getElementById("quote");
    newQuoteButton.addEventListener("click", () => {
        div.innerHTML = "Believe you can and you're halfway there.";
    });

//18. In an HTML page, create a list of items (e.g., a to-do list) using an unordered list (`<ul>`) and list items (`<li>`). Write JavaScript to add a new item to the list when a button is clicked.

    let addTaskBtn = document.getElementById("addTask");

    addTaskBtn.addEventListener("click", () => {
        const newTaskli = document.createElement("li");
        const newTask = document.createTextNode("Learn Dutch");
        newTaskli.appendChild(newTask);

        const todoList = document.getElementById("todoList");
        todoList.appendChild(newTaskli);
    });

//19. Create a web page with an image and a button. Write JavaScript to change the image source when the button is clicked.

    let changeImageButton = document.getElementById("changeImageButton");

    changeImageButton.addEventListener("click", () => {
        console.log('clicked');
        document.getElementById("myImage").src = "https://www.istockphoto.com/resources/images/PhotoFTLP/P3-istock-2079539767.jpg";
    });

//20. Build an interactive form in HTML (e.g., a simple login form) with input fields for username and password. Write JavaScript to validate the form when submitted. Display a message based on whether the login was successful or not.

    let formUsername = document.getElementById("username");
    let formPassword = document.getElementById("password");
    let formsubmitbtn = document.getElementById("form-submit-btn");
    let error = document.getElementById('Err');

    formsubmitbtn.addEventListener("click", (e) => {
        e.preventDefault(); // stop form from submitting/reloading

        if (formUsername.value === "" || formPassword.value === "") {
          error.innerHTML = "⚠️ Please enter your username and password.";
          error.style.color = "red";
          console.log("error");
        } else {
          error.innerHTML = "✅ Form submitted successfully!";
          error.style.color = "green";
        }
      
    });
    