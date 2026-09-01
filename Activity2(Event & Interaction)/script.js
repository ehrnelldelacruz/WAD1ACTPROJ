// this are the interactions such as the registeration, the buttons, toggle

// toggle for the light and dark mode function

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const body = document.body;

lightBtn.addEventListener("click", () => {
    console.log("Light mode activated");
    body.classList.remove("dark-mode");
});

darkBtn.addEventListener("click", () => {
    console.log("Dark mode activated");
    body.classList.add("dark-mode");
});

// registration form validation function
const form = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#name");
const courseInput = document.querySelector("#course");

form.addEventListener("submit", (event) => {
    console.log("Form submitted");
    event.preventDefault(); // prevent form submission

    alert(`Name: ${nameInput.value}\nCourse: ${courseInput.value}`); // to notify the user that the form has been submitted successfully
    //alert is a built-in function of the window object used to deliver critical information to the user.
});

document.addEventListener("mouseover", (event) => {
     console.log(event.target);
});

document.addEventListener("keydown", (event) => {
     console.log(event.key);
});