/* eslint-disable no-unused-vars */
// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
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
    //create element and class
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');


    const headerSpan1 = document.createElement('span');
    headerSpan1.classList.add('date');
    headerSpan1.textContent= "March 28, 2020"
    
    const headerh1 = document.createElement('h1');
    headerh1.textContent = "Lambda-times"

    const headerspan2 = document.createElement('span')
    headerspan2.classList.add('temp');
    headerspan2.textContent = 98;

    //appendChild 
    headerDiv.appendChild(headerSpan1);
    headerDiv.appendChild(headerh1);
    headerDiv.appendChild(headerspan2);

    return headerDiv;
}

        // add to page
    document.querySelector('.header-container').appendChild(Header())
    




    

