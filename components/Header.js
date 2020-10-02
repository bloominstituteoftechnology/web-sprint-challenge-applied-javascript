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
    const headerDiv = document.createElement('div')
    headerDiv.className = 'header'

    const dateSpan = document.createElement('span')
    dateSpan.className = 'date'

    const title = document.createElement('h1')

    const tempSpan = document.createElement('span')
    tempSpan.className = 'temp'

    dateSpan.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    headerDiv.append(dateSpan, title, tempSpan)
    
    return headerDiv
}

const entry = document.querySelector('.header-container')

entry.appendChild(Header())