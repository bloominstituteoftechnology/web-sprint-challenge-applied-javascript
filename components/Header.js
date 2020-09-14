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
    const divHeader = document.createElement("div")
    divHeader.classList.add("header")

    const spanDate = document.createElement("span")
    spanDate.classList.add("date")
    spanDate.textContent = "MARCH 28, 2020";
    divHeader.appendChild(spanDate);

    const headerOne = document.createElement("h1")
    headerOne.textContent = "Lambda Times"
    divHeader.appendChild(headerOne);

    const spanTemp = document.createElement("span")
    spanTemp.textContent = "98°";
    divHeader.appendChild(spanTemp);


    return divHeader
}

document.querySelector(".header-container").appendChild(Header())
