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

function Header(date, title, temp) {
    const newHeader = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    newHeader.appendChild(headerDate);
    newHeader.appendChild(headerTitle);
    newHeader.appendChild(headerTemp);

    newHeader.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = date;
    headerTitle.textContent = title;
    headerTemp.textContent = temp;

    return newHeader;
};

const header = document.querySelector('.header-container');

header.appendChild(Header());
