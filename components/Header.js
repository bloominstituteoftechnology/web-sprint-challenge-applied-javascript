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

function Header(name, day, deg) {
    const div = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    div.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    title.textContent = name
    date.textContent = day
    temp.textContent = deg

    div.appendChild(date)
    div.appendChild(title)
    div.appendChild(temp)


    return div
}

document.querySelector('body').appendChild(Header('Lambda Times','MARCH 28, 2020','98°'))