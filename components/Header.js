// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the 
// markup you see below:
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
    // All Element Constructs
    const hDiv = document.createElement("div")
    const hSpanD = document.createElement("span")
    const hH1 = document.createElement("h1")
    const hSpan = document.createElement("span")

    //THE CLASSES
    hDiv.classList.add("header")
    hSpanD.classList.add("date")
    hSpan.classList.add("temp")

    // Element Text
    hSpanD.textContent = "March 28, 2020"
    hH1.textContent = "Lambda Times"
    hSpan.innerHTML = "98&deg;"

    // Append the Elements
    hDiv.appendChild(hSpanD)
    hDiv.appendChild(hH1)
    hDiv.appendChild(hSpan)

    return hDiv;
}

const hConD = document.querySelector(".header-container")

hConD.appendChild(Header())