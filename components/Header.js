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



const myHeader = document.createElement('div')
myHeader.className = 'header'

const myTime = document.createElement('span')
myTime.className = 'date'
myTime.textContent = 'MARCH 28,2020'

const myH1 = document.createElement('h1')
myH1.textContent = 'Lambda Times'

const myTemp = document.createElement('span')
myTemp.className = 'temp'
myTemp.textContent = '98°'

myHeader.append(myTime, myH1, myTemp)

return myHeader
}

const dfsdf = document.querySelector('.header-container')

dfsdf.appendChild(Header())

//console.log(Header())




//console.log('its working')