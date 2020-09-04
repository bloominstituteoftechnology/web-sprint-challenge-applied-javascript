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

const entryPoint = document.querySelector(".header-container");

function Header() {
  let head = document.createElement("div");
  head.classList.add("header-container");
  let spanD = document.createElement("span");
  spanD.textContent = "MARCH 28, 2020";
  //   console.log(spanD);
  spanD.classList.add("date");
  let titleH = document.createElement("h1");
  titleH.textContent = "Lambda Times";
  let spanT = document.createElement("span");
  spanT.textContent = "98*";

  entryPoint.appendChild(head);
  entryPoint.appendChild(spanD);
  head.appendChild(titleH);
  head.appendChild(spanT);

  return head;
  console.log(head);
}

Header();
