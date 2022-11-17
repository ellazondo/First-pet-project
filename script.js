function sayGreeting() {
  let firstName = prompt("What is your first name?");
  if (firstName.length > 1) {
    alert(`Hello ${firstName}!`);
  }
}

sayGreeting();

function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  console.log(input.value);
}
