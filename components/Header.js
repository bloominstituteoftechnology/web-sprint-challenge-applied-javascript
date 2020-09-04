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



const headerContainer = document.querySelector('.header-container')

function header(dates, title, temp) {
    let header = document.createElement('div')
    header.classList.add('header')

    let date = document.createElement('span')
    date.classList.add('date')
    date.textContent = dates
    header.appendChild(date)

    let h1 = document.createElement('h1')
    h1.textContent = title
    header.appendChild(h1)

    let temperature = document.createElement('span')
    temperature.classList.add('temp')
    temperature.textContent = temp
    header.appendChild(temperature)

    return header
}

headerContainer.append(header('March 28, 2020', 'Lambda Times', '98°'))
