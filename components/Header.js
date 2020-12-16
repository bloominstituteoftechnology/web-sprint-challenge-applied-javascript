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

function Header(info) {
    const entry = document.querySelector('div.header-container')
    
    const head = document.createElement('div')
    head.classList.add('.header')
    entry.appendChild(head)

    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'March 28, 2020'
    entry.appendChild(date)

    const headerOne = document.createElement('h1')
    headerOne.textContent = 'Lambda Times'
    entry.appendChild(headerOne)

    const temp = document.createElement('span')
    temp.classList.add('temp')
    date.textContent = '98 dergees'
    entry.appendChild(temp)

    return entry
}

console.log(document.querySelector('.header-container'))