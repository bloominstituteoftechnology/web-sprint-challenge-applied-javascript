


//This is the entry point
const headerContainer = document.querySelector('.header-container')

function Header() {
    //instantiate elements needed
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')
    //add classes/textContent
    header.classList.add('header')
    date.classList.add('date')
    date.textContent = 'March 28, 2020'
    title.textContent = 'Lambda Times'
    temp.classList.add('temp')
    temp.textContent = `98\u00B0`
    //build hierarchy of elements
    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)
    //return the header
    return header
}
console.log(Header())

headerContainer.appendChild(Header());
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


