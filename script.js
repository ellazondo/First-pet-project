function sayGreeting() {
let firstName = prompt("What is your first name?");
if (firstName.length > 1) {
alert(`Hello ${firstName}!`);
}
}

sayGreeting();


function search(event) {
    event.preventDefault();
    let name = document.querySelector(#search-city-input);
}


const probabilityOfRain = 0.2;
const temperatureInC = 26;
const message =
  `Hello, ${name}, with a rain chance of 
${probabilityOfRain * 100}% and a temperature of 
${temperatureInC}C we recommend that you 
` +
  (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
  ` ${
    temperatureInC >= 26
      ? "and watch out for heatstroke."
      : " and bask in this fine weather."
  }`;
likelyToRain ? "rain boots" : "sun hat";
console.log(message);
