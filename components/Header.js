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
    //  <div class="header">
    const head = document.createElement('div');
    head.attributes = 'class="header"';
    // <span class="date">MARCH 28, 2020</span>
    const date = document.createElement('span');
    date.attributes ='class="date"';
    date.textContent = 'MARCH 28, 2020';
    head.appendChild(date)
    //    <h1>Lambda Times</h1>
    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    head.appendChild(h1);
    //    <span class="temp">98°</span>
    const temp = document.createElement('span');
    temp.attributes = 'class="temp"';
    temp.textContent = '98°';
    head.appendChild(temp);

    return head
}

const headerContainer= document.querySelector('div.header-container')
headerContainer.appendChild(Header())
