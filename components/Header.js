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
    //creat nodes
    const header = document.createElement('div')
    const sDate = document.createElement('span')
    const h1 = document.createElement('h1')
    const sTemp = document.createElement('span')

    //apend nodes
    header.appendChild(sDate)
    header.appendChild(h1)
    header.appendChild(sTemp)

    // populate nodes
    sDate.textContent = '10-10-2020'
    h1.textContent = 'lambda times'
    sTemp.textContent = '98'

    //set node class
    header.classList.add('header')
    sDate.classList.add('date')
    sTemp.classList.add('temp')

    return header
}

const headContainer = document.querySelector('div.header-container')

headContainer.appendChild(Header())
