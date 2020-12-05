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
    const newsHeaderContainer = document.createElement('div')
    newsHeaderContainer.classList.add('header')

    const newsHeaderDate = document.createElement('span')
    newsHeaderDate.classList.add('date')
    newsHeaderDate.innerHTML = "MARCH 28, 2020"
    newsHeaderContainer.appendChild(newsHeaderDate)
    
    const newsHeaderHead = document.createElement('h1')
    newsHeaderHead.innerHTML = "Lambda Times"
    newsHeaderContainer.appendChild(newsHeaderHead)

    const newsHeaderTemp = document.createElement('span')
    newsHeaderTemp.classList.add('temp')
    newsHeaderTemp.innerHTML = "98°"
    newsHeaderContainer.appendChild(newsHeaderTemp)
    return newsHeaderContainer
}

const header = Header()
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(header)