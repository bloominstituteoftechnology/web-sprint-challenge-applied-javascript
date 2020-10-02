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
    const div = document.createElement('div')
    const firstSpan = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const secondSpan = document.createElement('span')
        //class list
    div.classList.add('header')
    firstSpan.classList.add('date')
    secondSpan.classList.add('temp')
        //text content
    firstSpan.textContent = 'October 2nd, 2020'
    headerTitle.textContent = 'Lambda Times'
    secondSpan.textContent = '98 degrees'
        //appending
    div.appendChild(firstSpan)
    div.appendChild(headerTitle)
    div.appendChild(secondSpan)

    return div
}
const headerContainer = document.querySelector('div.header-container')

headerContainer.appendChild(Header())