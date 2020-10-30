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


var para = document.createElement('h1');
var node = document.createTextNode('Lambda Times');
para.appendChild(node);
var element = document.getElementsByClassName('header-container');
element.appendChild(para);

// var varheader = document.getElementsByClassName


function Header() {
    let



    // const headerConst = document.querySelector(.header - container);
    // headerConst.innerHTML


}


