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
const container = document.querySelector (".header-container")
console.log(container)
function Header() {

const heading = document.createElement("div")
const date = document.createElement("span")
const title = document.createElement("h1")
const temp = document.createElement("span")

heading.appendChild(date)
heading.appendChild(title)
heading.appendChild(temp)

heading.className = "header"
date.className = "date"
temp.className = "temp"

date.textContent = "MARCH 20, 2020"
title.textContent = "Lambda Times"
temp.textContent = "98ð" 











return heading

}
console.log(Header())

container.appendChild(Header())