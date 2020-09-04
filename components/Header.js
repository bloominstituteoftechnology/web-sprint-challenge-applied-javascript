

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

const header = document.querySelector('.header-container');

function Header() {

  const heading = document.createElement('div');
  heading.classList.add('header');

  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent='MARCH 28, 2020';

  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';
  
  const temperature = document.createElement('span');
  temperature.classList.add('temp');
  
  header.appendChild(heading)
  heading.appendChild(date);
  heading.appendChild(title);
  heading.appendChild(temperature);

  return Header;
}

