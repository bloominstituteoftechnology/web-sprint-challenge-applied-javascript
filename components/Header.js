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


//this one will not run ????
// const headerMaker = () => {

//     const header = document.createElement('div')
//     const date = document.createElement('span')
//     const h1 = document.createElement('h1')
//     const temp = document.createElement('span')

//     header.className ='header'
//     date.className ='date'
//     temp.className = 'temp'

//     date.textcontent = 'MARCH 28, 2020'
//     h1.textcontent = 'Lambda Times'
//     temp.textContent = '98°'

//     header.appendChild(date)
//     header.appendChild(h1)
//     header.appendChild(temp)

//     return headerMaker
// }
// console.log(headerMaker())
//SELECTING '.header-container'
// const headerContainer = document.querySelector('.header-container')

// headerContainer.appendChild(headerMaker())



const headerMaker = () => {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')
   
    header.className = 'header'
    date.className = 'date'
    temp.className = 'temp'
   
    date.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    temp.textContent = '98°'
    
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)


    return header
}

console.log(headerMaker())


const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(headerMaker()) 