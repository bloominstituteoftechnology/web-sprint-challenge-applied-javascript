// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>


// Use your function to create a header
// and append it to the DOM inside the div.header-container

const header = document.querySelector('div.header-container')
let newHeader = Header()
header.appendChild(newHeader)

function Header() {

const div = document.createElement('div')
const span1 = document.createElement('span')
const h1 = document.createElement('h1')
const span2 = document.createElement('span')

div.appendChild(span1)
div.appendChild(h1)
div.appendChild(span2)

div.classList.add('header')
span1.classList.add('date')
span2.classList.add('temp')

span1.innerText = "March 28, 2020";
h1.innerText = "Lambda Times";
span2.innerText = "98°";


return div;

}
