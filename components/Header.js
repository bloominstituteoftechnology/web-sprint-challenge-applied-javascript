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
    //Call variables
    let thisDate = "MARCH 28, 2020";
    let thisTemp = "98°";
    const thisTitle = "Lambda Times"

    //Create Elements
    const header = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const temp = document.createElement("span");

    //Add classes
    header.className = "header";
    date.className = "date";
    temp.className = "temp";

    //Add content
    date.innerText = thisDate;
    temp.innerText = thisTemp;
    title.innerText = thisTitle;

    //Append content
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;
}

document.querySelector(".header-container").appendChild(Header());