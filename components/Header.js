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
    const newsHeaderContainer = document.createElement('div')
    const newsHeaderDate = document.createElement('span')
    const newsHeaderHead = document.createElement('h1')
    const newsHeaderTemp = document.createElement('span')

}

const headerBuilder = document.querySelector('.header')
headerBuilder.appendChild(header)
return Header
