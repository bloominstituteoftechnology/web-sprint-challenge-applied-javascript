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

function Header() {
    return <div class="header">
        <span class="date">MARCH 28, 2020</span>
        <h1>Lambda Times</h1>
        <span class="temp">98°</span>
    </div>
}
console.log(Header)

// const newElement = document.createElement("header")
// newElement