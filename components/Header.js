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
    const theNewDiv = document.createElement('div')
    theNewDiv.classList.add('header')
    theNewDiv.createElement('span')
    theNewDiv.classList.add('date')
    theNewDiv.createElement('h1')
    theNewDiv.createElement('span')
    theNewDiv.classList.add('temp')

    const date = document.querySelector('div .header span .date')
    date.textContent = 'MARCH 28, 2020'

    const mainHeader = document.querySelector('div .header h1')
    mainHeader.textContent = 'Lambda Times'

    const temp = document.querySelector('div .header span .temp')
    temp.textContent = '98º'

    return theNewDiv
}

document.body.headerContainer.prepend(Header)