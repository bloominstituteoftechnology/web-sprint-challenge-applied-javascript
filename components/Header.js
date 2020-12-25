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

  // create element
  let header = document.createElement('div');
  let date = document.createElement('span');
  let title = document.createElement('h1');
  let temp = document.createElement('span');

  // assign class
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // assign content
  date.textContent = "March 28, 2020";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";


  //  append to heirarchy 
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  // append to html
  let headerContainer = document.querySelector('.header-container');
  headerContainer.appendChild(header);

  // console.log(header); // it works

};

// console.log(Header()); // it works
Header();