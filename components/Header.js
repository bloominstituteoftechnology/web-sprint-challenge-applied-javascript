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

function headerComponent() {
    const header = document.createElement('div'); 
    header.classList.add('header');

    const dateLine = document.createElement('span');
    dateLine.classList.add('date');
    header.appendChild(dateLine); 

    const headerTitle = document.createElement('h1'); 
    headerTitle.textContent = 'Lambda Times'; 
    header.appendChild(headerTitle); 

    const temp = document.createElement('span'); 
    temp.classList.add('temp'); 
    temp.textContent = '98°'; 
    header.appendChild(temp); 

    return header; 
}

const headerContainer = document.querySelector('div.header-container'); 
//testing testing 1,2,3 is this thing on? 
//console.log(headerContainer); 

headerContainer.appendChild(headerComponent());

