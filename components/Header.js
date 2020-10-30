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


function Header(inputDate, inputTitle, inputTemp) {
    //create header div
    const header = document.createElement('div');
    header.classList.add('header');

    //create date span
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = inputDate;
    header.appendChild(date);

    //create h1 title
    const title = document.createElement('h1');
    title.textContent = inputTitle;
    header.appendChild(title);

    //crate temp span
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = inputTemp;
    header.appendChild(temp);

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header('MARCH 28, 2020', 'Lambda Times', '98°'))