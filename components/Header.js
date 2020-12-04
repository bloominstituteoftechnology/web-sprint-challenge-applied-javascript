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
    // instantiating elements
    const headerDiv = document.createElement("Div");
    const dates = document.createElement("span");
    const title = document.createElement("h1");
    const temperature = document.createElement("span");
    //setting class names
    headerDiv.classList.add("header");
    dates.classList.add("date");
    title.textContent = "Lambda Times";
    temperature.classList.add("temp");
    temperature.textContent = "98";
    //append elements
    headerDiv.append(dates, title, temperature);
    //return
    return headerDiv;
}

document.querySelector("div.header-container").appendChild(Header());


