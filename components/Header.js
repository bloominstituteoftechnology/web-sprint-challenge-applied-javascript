// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
  const headerDiv = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerH1 = document.createElement("h1");
  const headerTemp = document.createElement("span");

  headerDate.textContent = "MARCH 28, 2020";
  headerH1.textContent = "Lambda Times";
  headerTemp.textContent = "98°";

  headerTemp.classList.add("temp");
  headerDate.classList.add("date");
  headerDiv.classList.add("header");

  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerTemp);

  return headerDiv;
}

const headerSelection = document.querySelector(".header-container");
headerSelection.append(header());
