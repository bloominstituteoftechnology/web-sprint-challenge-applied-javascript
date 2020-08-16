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

    const header = document.createElement('div');
    header.classList.add('header')

    const spanDate = document.createElement('span');
    spanDate.classList.add('date');

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');

    const header1 = document.createElement('h1');
    header1.classList.add('headline');

    spanDate.textContent = "Sunday, August 16, 2020";
    header1.textContent = "Lambda Chronicles";
    spanTemp.textContent = "85°F";

    header.appendChild(spanDate);
    header.appendChild(spanTemp);
    header.appendChild(header1);

    const headerContainer = document.querySelector(".header-container")

    return headerContainer.append(header);
}
