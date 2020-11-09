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


    title.textContent = name
    date.textContent = day
    temp.textContent = deg
    div.style.width = '100%'
    date.style.width = "100%"
    temp.style.width = '100%'
    div.style.display = 'flex'
    div.style.justifyContent = "space-evenly"

    div.appendChild(title)
    div.appendChild(date)
    div.appendChild(temp)


    return div
}

document.querySelector('body').appendChild(Header('Lambda Times','MARCH 28, 2020','98°'))