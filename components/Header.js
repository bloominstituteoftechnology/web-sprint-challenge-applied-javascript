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
console.log(document)
function Header() {
  const headerElement = document.createElement("div");
  const dateElement = document.createElement("span");
  const bannerElement = document.createElement("h1");
  const weatherElement = document.createElement("span");
  
  console.log(headerElement); 
    
  headerElement.append(dateElement, bannerElement, weatherElement);

    headerElement.classList.add("header");
    dateElement.classList.add("date");
    weatherElement.classList.add("temp");

    dateElement.setAttribute("type", "date");
    dateElement.setAttribute("value", "MARCH 28, 2020")
    bannerElement.textContent("Lambda Times");
    weatherElement.textContent("98°");
   
    return headerElement;
}   

const header = document.querySelector(".header");
    header.forEach((currentValue) => {
        currentValue.append(Header())
    });

