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

function constructor(text1, text2) {
    let div = document.createElement('div')
    div.classList.add('header')
    
    let span = document.createElement('span')
    span.classList.add('date')
    span.textContent = text1

    let span2 = document.createElement('span')
    span2.classList.add('temp')
    span2.textContent = text2

    let h1 = document.createElement('h1')


    div.append(span, span2, h1)
    return div
}

let header = document.querySelector('.header-container')
header.append(constructor('MARCH 28 2020', '98°'))






