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
// const header = document.querySelector('.header')
// console.log(header)
function heading (title, content){
    const header = document.createElement('div')
    const span = document.createElement('span')
    const date = document.createElement('div')
    const headerTitle = document.createElement('h1')
    const temp = document.createElement('div')
    header.appendChild(span)
    header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(temp);
    header.classList.add('header')
   
    headerTitle.textContent = title
    date.textContent = content
    temp.textContent = temp
    return header
}
console.log(heading())