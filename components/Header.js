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
  const header = document.querySelector(".header-container");
  //create nessasary components
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");
  var date = document.createElement("span");
  date.classList.add("date");
  var h1 = document.createElement("h1");
  var temp = document.createElement("span");
  temp.classList.add("temp");

  //setting values for created components
  date.textContent = "March 28, 2020";
  console.log(date);
  h1.textContent = "Lambda Times";
  console.log(h1);
  temp.textContent = "98°";
  console.log(temp);

  //creating the nested structure
  header.appendChild(headerDiv);
  headerDiv.appendChild(date);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(temp);

  //returning the div
  return header;
}

Header();
