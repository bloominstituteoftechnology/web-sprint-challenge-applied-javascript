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

// Creates and returns the header element
function Header() {

    const parentPanel = document.createElement('div')
    parentPanel.className = 'header'

    const date = document.createElement('span')
    date.className = 'date'
    date.textContent = 'MARCH 28, 2020'
    parentPanel.appendChild(date)

    const h1 = document.createElement('h1')
    h1.textContent = 'Lambda Times'
    parentPanel.appendChild(h1)

    const temp = document.createElement('span')
    temp.textContent = '98°'
    temp.className = 'temp'
    parentPanel.appendChild(temp)

    return parentPanel
}

// Adds the header to the container
const toAppend = Header()
const parent = document.querySelector('.header-container')
parent.appendChild(toAppend)