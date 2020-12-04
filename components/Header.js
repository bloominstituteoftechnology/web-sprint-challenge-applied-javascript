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
    let header = document.createElement('h1');
    header.appendChild("Lambda Times");

    let dateSpan = document.createElement('span');
    dateSpan.innerHTML = dateString;

    let tempSpan = document.createElement('span');
    tempSpan.innerHTML = tempString;

    return header;
}
