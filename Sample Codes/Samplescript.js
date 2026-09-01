// ============== Lesson 2; Event and Interaction ==============
// basic syntax of a addEventListener
// element.addEventListener("event", function);

// Example
// button.addEventListener("click", showMessage);

// const button = document.querySelector("#myButton");
// // // const message = document.querySelector("#message");
// const body = document.querySelector('body');
// const keypress = document.querySelector("#keypress");

// // function showMessage() {
// //     // console.log("Button clicked!");
// //     message.textContent = "Button was clicked!";
// // }

// // button.addEventListener("click", showMessage);

// // function showMessage() {
// //     console.log("Button clicked!");
// // }

// // button.addEventListener("click", showMessage);
// // console.log("Clicked!");

// button.addEventListener("click", () => {
//     console.log("Button clicked!");
//     message.textContent = "You are now black!";
//     body.style.backgroundColor = "black";
//     body.style.color = "white";

//     document.body.classList.toggle("dark");
// });

// const box = document.querySelector("#box");
// box.addEventListener("mouseover", () => {
//     box.textContent = "Mouse Detected!";
// });

// box.addEventListener("mouseout", () => {
//     box.textContent = "Mouse Left!";
// });

// document.addEventListener("keydown", () => {
//     console.log("A key was pressed");
// });

// document.addEventListener("mouseover", (event) => {
//     console.log(event.target);
// });

// document.addEventListener("keydown", (event) => {
//     console.log(event.key);
// });

// const input = document.querySelector("#nameInput");
// const output = document.querySelector("#output");

// input.addEventListener("input", () => {
//     output.textContent = input.value;
// });

// const form = document.querySelector("#loginForm");
// form.addEventListener("submit", (event) => {
//     console.log("Form submitted!");
//     event.preventDefault();
// });
// ==========================================================================