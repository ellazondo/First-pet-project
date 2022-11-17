function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let header = document.querySelector("header");
  if (searchInput.value) {
    header.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please type a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
