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
    //Create the elements
    const headerDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const headerh1 = document.createElement('h1');
    const span2 = document.createElement('span')

    //Give the elements classes
    headerDiv.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //Add text content to the elements as needed
    span1.textContent = 'March 28, 2020';
    headerh1.textContent = 'Lambda Times';
    span2.textContent = '98';
    

    //Append everything to the DOM
    //Select the parent of the header in the HTML and append the sub-parent to it
    const headerSuperParent = document.querySelector('.header-container');
    headerSuperParent.appendChild(headerDiv);
    //Append the children to the subparent div
    headerDiv.appendChild(span1);
    headerDiv.appendChild(headerh1);
    headerDiv.appendChild(span2);
}

Header();
