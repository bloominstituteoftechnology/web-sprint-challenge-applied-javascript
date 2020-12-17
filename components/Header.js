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

function Header(elements) {
  // main container
  const container = document.createElement("div");

  // sub container
  const date = document.createElement("span");
  const header = document.createElement("h1");
  const temp = document.createElement("span");

  // container children
  container.appendChild(date);
  container.appendChild(header);
  container.appendChild(temp);

  // element classes
  container.classList.add("header");
  date.classList.add("date");
  temp.classList.add("span");

  // text content
  date.textContent = "MARCH 28, 2020";
  header.textContent = "Lambda Times";
  temp.textContent = "98";

  return container;
}

const header_container = document.querySelector("div.header-container");

const headerComponent = Header();

header_container.appendChild(headerComponent);
