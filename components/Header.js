/* eslint-disable no-unused-vars */
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
    let header = document.createElement('header')
    header.textContent = "Lambda Times"

    header.style.width = '100%'
    header.style.marginTop = '15%'
    header.style.height = '10vh'
    header.style.fontSize = '5rem'
    
    return header
}

const header = Header()

let container1 = document.querySelector('.header-container')

container1.appendChild(header)
