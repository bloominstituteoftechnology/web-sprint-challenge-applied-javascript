// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
    // creating markup 
    const header = document.createElement('div')
    header.className = "header"
    const date = document.createElement('span')
    date.className = "date"
    date.innerText = "MARCH 28, 2020"
    const lambdaTimes = document.createElement('h1')
    lambdaTimes.innerText = "Lambda Times"
    const temp = document.createElement('span')
    temp.className = "temp"
    temp.innerText = "98°"
    // apending the markup inside header div 
    header.append(date, lambdaTimes,temp)
    return header
}
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())
