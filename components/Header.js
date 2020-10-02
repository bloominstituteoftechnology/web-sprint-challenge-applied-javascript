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

    const headerBox = document.createElement('div');
    const dateContent = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span')

    headerBox.classList.add('header')
    dateContent.classList.add('date')
    temperature.classList.add('temp')

    headerBox.appendChild(dateContent)
    headerBox.appendChild(title)
    headerBox.appendChild(temperature)

    return headerBox
}

const mainContainer = document.querySelector('.header-container');

mainContainer.appendChild(Header);
