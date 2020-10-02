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
   




    //Container Declaration
 const container = document.querySelector('.header-container')
    //Instatiate
    const headDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const header = document.createElement('h1');
    const tempSpan = document.createElement('span');
    //Hierarchy
    container.append(headDiv)
    headDiv.append(dateSpan);
    headDiv.append(header);
    headDiv.append(tempSpan);
    //ClassList
    headDiv.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')
    //TextContent
    dateSpan.textContent = 'MARCH 28, 2020';
    header.textContent = 'Lambda Times';
    tempSpan.textContent = '98°'



return headDiv
}
Header()