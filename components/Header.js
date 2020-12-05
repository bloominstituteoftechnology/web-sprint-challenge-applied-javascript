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

const divContainer = document.querySelector(".header-container")
 
function header() {

const container = document.createElement("div")
const date = document.createElement("span")
const Lambda = document.createElement("h1")
const temp = document.createElement("span")

container.classList.add("header")
date.classList.add("date")
temp.classList.add("temp")

date.textContent ="March 28, 2020"
Lambda.textContent = "Lambda Times"
temp.textContent = "98°"

// divContainer.appendChild(container)
// divContainer.appendChild(container)
container.appendChild(date)
container.appendChild(Lambda)
container.appendChild(temp)
// divContainer.append(container)

return container

}
divContainer.appendChild(header())


