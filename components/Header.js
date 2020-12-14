// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  let header = document.createElement("div");
  header.classList.add("header");

  let date = document.createElement("span");
  date.classList.add("date");
  header.appendChild(date);

  let lambdaTimes = document.createElement("h1");
  lambdaTimes.textContent = "Lambda Times";
  header.appendChild(lambdaTimes);

  let temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = "98°";
  header.appendChild(temp);

  return header;
}

document.querySelector(".header-container").appendChild(Header());
