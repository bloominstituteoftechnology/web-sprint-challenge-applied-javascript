// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
    //new elements:
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1 = document.createElement('h1');
    const tempSpan = document.createElement('span');

    //classlist:
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //text content:
    document.getElementsByClassName('date');
   dateSpan.textContent = "MARCH 28, 2020";
    document.getElementsByTagName('h1');
    h1.textContent = "Lambda Times";
    document.getElementsByClassName('temp');
    tempSpan.textContent = "98°";

    //parent/child relationships:
   
headerDiv.appendChild(dateSpan);
headerDiv.appendChild(h1);
headerDiv.appendChild(tempSpan);
    
return headerDiv;
}
const appendHeader = document.querySelector('.header-container');
appendHeader.appendChild(Header());