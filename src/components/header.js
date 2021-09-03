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
  const header = document.createElement('div');
  const datespan = document.createElement('span');
  const titleh1 = document.createElement('h1');
  const tempspan = document.createElement('span');

  header.classList.add('header');
  datespan.classList.add('date');
  tempspan.classList.add('temp');

  datespan.textContent = date;
  titleh1.textContent = title;
  tempspan.textContent = temp;

  header.appendChild(datespan);
  header.appendChild(titleh1);
  header.appendChild(tempspan);
  return header;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const parent = document.querySelector(selector)
  parent.appendChild(Header('The Rain, a prank?','2021','85'));
}

export { Header, headerAppender }
