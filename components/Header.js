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

function header() {
    const head = document.createElement("div");
    const headDate = document.createElement("span");
    const headTitle = document.createElement("h1");
    const headTemp = document.createElement("span");

    headDate.appendChild(head);
    headTitle.appendChild(head);
    headTemp.appendChild(head);

    headDate.classList.add("date");
    headTemp.classList.add("temp");

    headDate.textContent = "MARCH 28, 2020";
    headTitle.textContent = "Lambda Times";
    headTemp.textContent = "98°";
    
    return head;
}

const headContainer = document.querySelector(".header-container");

headContainer.append(header);

   
 

