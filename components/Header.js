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

function headerContainer() {
    // Created header DOM components
    const header = document.createElement(`div`);
    const date = document.createElement(`span`);
    const headerTitle = document.createElement(`h1`);
    const temp = document.createElement(`span`);

    // Classes
    header.classList.add(`header`);
    date.classList.add(`date`);
    temp.classList.add(`temp`);

    // Structure to look like HTML
    header.appendChild(date);
    header.appendChild(headerTitle);
    header.appendChild(temp);

    // textContent
    date.textContent = "October 8, 2020";
    headerTitle.textContent = "Lambda Times";
    temp.textContent = `98°`;

    // Return our function
    return header;
}

const contain = document.querySelector(`div.header-container`);
contain.append(headerContainer());