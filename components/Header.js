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

function createHeader() {
    const header = document.createElement('div');
    // header.appendChild('');
    // hea

    const date = document.createElement('span');
    header.appendChild('date');
    date.classList.add('date');
    date.textContent = "MARCH 28, 2020";

    const h1 = document.createElement('h1');
    header.appendChild('h1');
    header.classList.add('header');
    h1.textContent = "Lambda Times";

    const temp = document.createElement('span');
    header.appendChild('temp');
    temp.classList.add('temp');
    temp.textContent = "98°";
  

    return header;
}

const headyHead = document.querySelector('.header-container');

headyHead.appendChild(createHeader());