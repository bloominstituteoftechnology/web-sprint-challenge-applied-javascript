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

import axios from 'axios'


function constructor(text1,text2,text3) {
    //elements
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')
    
    //classes
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //text content
    date.textContent = text1
    h1.textContent = text2
    temp.textContent = text3

    header.append(date,h1,temp)
    const headerContainer = document.querySelector('div.header-container')
    headerContainer.append(header)
    return header
    
}



constructor('MARCH 28, 2020','Lambda Times','98°')




