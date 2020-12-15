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

function Header() {
        const parentDiv = document.createElement('div')
        const date = document.createElement('span')
        const title = document.createElement('h1')
        const temp = document.createElement ('span')
    
        date.textContent = 'MARCH 28, 2020'
        title.textContent = 'Lambda Times'
        temp.textContent = '98°'
    
        parentDiv.classList.add('Header')
        date.classList.add('date')
        temp.classList.add('temp')
    
        parentDiv.appendChild(date)
        parentDiv.appendChild(title)
        parentDiv.appendChild(temp)
    
        return parentDiv;
    }
    
    var domElem = document.querySelector('div.header-container');
    console.log(domElem)
    domElem.appendChild(Header());
    