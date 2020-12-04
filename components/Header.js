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

    //created elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //added classname
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //set order
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    //Give text content
    date.textContent = 'March 28, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header;

}

const entryPoint = document.querySelector('.header-container');

//appended to Dom
entryPoint.appendChild(Header());
