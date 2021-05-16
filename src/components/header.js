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
const div = document.createElement('div');
span1 = document.createElement('span');
h1 = document.createElement('h1');
span2 = document.createElement('span');
div.classList.add('header');
span1.classList.add('date');
span2.classlist.add('temp');
div.appendChild(h1);
div.appendChild(span1);
div.appendChild(span2);
h1.textContent = titlel
span1.textContent = date;
span2.textContent = temp;
return div
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headerDiv = document.querySelector(selector)
headerDiv.appendChild(Header('Lambda Times', 'May 16th, 2021','55°F'))
return headerDiv
}

export { Header, headerAppender }
