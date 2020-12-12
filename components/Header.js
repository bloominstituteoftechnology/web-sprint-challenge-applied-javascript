// STEP 1: Create a Header component.
// -----------------------
// [x]Write a function that takes no arguments and returns the markup you see below:
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
    const divHeader = document.createElement('div');
    const spanElement = document.createElement('span');
    const secondSpanElement = document.createElement('span')
    const headingOneElement = document.createElement('h1');
    
    console.log(divHeader);
    console.log(spanElement);
    console.log(secondSpanElement);
    console.log(headingOneElement);

    divHeader.classList.add('header');
    spanElement.classList.add('date');
    secondSpanElement.classList.add('temp');
    

    divHeader.appendChild(spanElement);
    divHeader.appendChild(headingOneElement);
    divHeader.appendChild(secondSpanElement);

    spanElement.textContent = 'MARCH 28, 2020';
    headingOneElement.textContent = 'Lambda Times';
    secondSpanElement.textContent = '98°';


    return divHeader;
}
const createHeader = Header();
console.log('it works', createHeader);

const divHeaderContainer = document.querySelector('div.header-container');
divHeaderContainer.appendChild(createHeader);
