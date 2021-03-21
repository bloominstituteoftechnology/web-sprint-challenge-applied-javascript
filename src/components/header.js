
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
//creation of elements

const div = document.createElement('div');
const day = document.createElement('span');
const h1 = document.createElement('h1');
const degrees = document.createElement('span');

//class adds

div.classList.add('header');
day.classList.add('date');
degrees.classList.add('temp');

//content

day.textContent = `${date}`
h1.textContent = `${title}`
degrees.textContent = `${temp}`

//appending

div.appendChild(day);
div.appendChild(h1);
div.appendChild(degrees);

return div;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

let hold = document.querySelector(selector)
hold.appendChild(Header('Lambda Times','1-11-1999','72f'))
}

export { Header, headerAppender }