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
    
    const headerDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const head1 = document.createElement('h1');
    const span2 = document.createElement('span');


    //append elements

    headerDiv.appendChild(span1);
    headerDiv.appendChild(head1);
    headerDiv.appendChild(span2);

    
    //add class names
    headerDiv.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //text content
    head1.textContent = 'Lambda Times'
    span1.textContent = 'March 28, 2020'
    span2.textContent = '98°'

    const headerDom = document.querySelector('.header-container')
    headerDom.append(headerDiv)

    
}


Header()