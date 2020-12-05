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
  //   const createdHDiv = document.createElement("div");
  //   const dateSpan = document.createElement("span");
  //   const h1Title = document.createElement("h1");
  //   const tempSpan = document.createElement("span");

  //   createdHDiv.appendChild(dateSpan);
  //   createdHDiv.appendChild(h1Title);
  //   createdHDiv.appendChild(tempSpan);

  //   createdHDiv.classList.add("header");
  //   dateSpan.classList.add("date");
  //   createdHDiv.classList.add("header-container");
  //   tempSpan.classList.add("temp");

  //   dateSpan.textContent = "MARCH 28, 2020";
  //   h1Title.textContent = "Lambda Times";
  //   tempSpan.textContent = "98°";

  const createdHDiv = document.createElement("div");
  createdHDiv.classList.add("header");
  //   don't need to append inside of function as this container will go into the class/div of the HTML container

  const dateSpan = document.createElement("span");
  createdHDiv.appendChild(dateSpan);
  dateSpan.classList.add("date");
  dateSpan.textContent = "MARCH 28, 2020";

  const h1Title = document.createElement("h1");
  createdHDiv.appendChild(h1Title);
  createdHDiv.classList.add("header-container");
  h1Title.textContent = "Lambda Times";

  const tempSpan = document.createElement("span");
  createdHDiv.appendChild(tempSpan);
  tempSpan.classList.add("temp");
  tempSpan.textContent = "98°";

  return createdHDiv;
}
// console.log(Header);
const container = document.querySelector(".header-container");
container.appendChild(Header());
