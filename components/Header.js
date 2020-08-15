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
    // building elements
    const divHeader = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1Tag = document.createElement('h1');
    const spanTemp = document.createElement('span');
    // adding to the DOM
    divHeader.append(h1Tag);
    divHeader.append(spanDate);
    divHeader.append(spanTemp);
    
    divHeader.classList.add('header');
    spanDate.classList.add('date');
    spanDate.textContent=('March 28, 2020');

    spanTemp.classList.add('temp');
    spanTemp.textContent=('98°');
    h1Tag.textContent=('Lambda Times');
    
    return divHeader;
}

document.querySelector('.header-container').append(Header());
