// Select elements
let form = document.getElementById('my-form');
let body = document.body;
let ul = document.querySelector('.items');
let submitBtn = document.querySelector(".btn"); // ✅ better than getElementsByClassName

submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // ✅ Prevent form from submitting and refreshing
    form.style.backgroundColor = "red"; // ✅ Change form background color

    // Add dark mode class to body
    body.classList.add('bg-dark');
    body.style.backgroundColor = "black";
    body.style.color = "white";
    
    // Replace last <li> with <h1>Hello>
    const lastItem = ul.lastElementChild;
    const helloHeading = document.createElement('h1');
    helloHeading.textContent = 'Hello';
    ul.replaceChild(helloHeading, lastItem);
});