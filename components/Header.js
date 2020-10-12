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

   const div =document.createElement('div');
   const span=document.createElement('span');
   const spantemp=document.createElement('span');
   const h1=document.createElement('h1');
   
  


div.classList.add('header');
span.classList.add('date');
spantemp.classList.add('temp');


span.textContent="MARCH 28,2020";
h1.textContent="Lambda Times";
spantemp.textContent="98";



div.appendChild(span);
div.appendChild(h1);
div.appendChild(spantemp);


return div;
    
}
const header1=document.querySelector('.header-container');

header1.appendChild(Header());

