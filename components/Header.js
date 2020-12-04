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
const newHeader = document.querySelector('.header-container');
console.log(newHeader);

function Header() {
    
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    console.log(headerDate);

    newHeader.appendChild(headerDiv);
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(headerTemp);

    headerDate.textContent = 'March 28, 2020';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';


    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    

    console.log(headerDiv);
    return newHeader;
}
console.log(Header());

