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
    let div = document.createElement('div');
    div.classList.add('header');

    let date = document.createElement('span');
    date.textContent = 'MARCH 28, 2019';
    date.classList.add('date');
    div.appendChild(date);

    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    div.appendChild(h1);

    let temp = document.createElement('temp');
    temp.classList.add('temp');
    temp.textContent = '98°';
    div.appendChild(temp);

    return div;
}

const header = Header();

document.querySelector('div.header-container').appendChild(header); 