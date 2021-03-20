const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ 03/19/2021 }</span>
  //    <h1>{ Lambda Times}</h1>
  //    <span class="temp">{ 35* }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }

function Header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const date = document.createElement('div');
  date.classList.add('date');
  date.textContent = 'March 19, 2021';

  const h1 = document.createElement('h1');
  h1.textContent = 'Lambda Times';

  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = '35\xB0';

  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(temp);

  const headerContainer = document.querySelector('.header.container');
  headerContainer.appendChild(header);

  return headerContainer;
}

header();