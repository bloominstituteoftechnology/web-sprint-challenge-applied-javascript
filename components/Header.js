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


    //instantiate
    const mainDiv = document.createElement('div')
    const spanD = document.createElement('span')
    const h1 = document.createElement('h1')
    const spanT = document.createElement('span')


    //Structure Section
    mainDiv.appendChild(spanD)
    mainDiv.appendChild(h1)
    mainDiv.appendChild(spanT)

    // console.log(mainDiv)

    //Assign Classes 
    mainDiv.classList.add('header')
    spanD.classList.add('date')
    spanT.classList.add('temp')


    //Text Content
    spanD.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    spanT.textContent = "98°"

    //Append to the DOM
    const headerContainer = document.querySelector('.header-container')

    // console.log(headerContainer)

    headerContainer.appendChild(mainDiv)

}

Header()