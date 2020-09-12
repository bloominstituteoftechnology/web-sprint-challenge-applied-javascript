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
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    let span1 = document.createElement('span');
    span1.classList.add('date');
    span1.textContent = 'MARCH 28, 2020';
    headerDiv.appendChild(span1);
    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    headerDiv.appendChild(h1);
    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98°';
    headerDiv.appendChild(span2);
    return headerDiv;
}

let header = Header();
console.log(header);
let head = document.querySelector('.header-container');
head.appendChild(Header());
let heads = document.querySelectorAll('.header');
heads[0].style.display = 'none';
