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

let createHeader = () => {
    let header = document.createElement('div')
    header.classList.add('header')
    let date = document.createElement('span')
    date.classList.add('date')
    date.innerHTML = 'MARCH 28, 2020'
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Lambda Times'
    let temp = document.createElement('span')
    temp.innerHTML = '98°'
    temp.classList.add('temp')
    header.append(date, h1,temp)
   
   let container = document.querySelector('.header-container')
    
    return container.append(header)

}

createHeader()