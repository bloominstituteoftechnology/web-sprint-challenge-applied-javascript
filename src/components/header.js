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
  const div_header = document.createElement('div');
  const span_date = document.createElement('span');
  const h1 = document.createElement('h1');
  const span_temp = document.createElement('span');

  div_header.classList.add('header');
  span_date.classList.add('date');
  span_date.textContent = date;
  h1.textContent = title; 
  span_temp.classList.add('temp');
  span_temp.textContent = temp;

  div_header.appendChild(span_date);
  div_header.appendChild(h1);
  div_header.appendChild(span_temp);

  return div_header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const date = new Date();
  selector.appendChild(Header("The Bitcoin Exchange", date.toDateString(), "75°" ));
}

const header = document.querySelector('.header-container');
headerAppender(header);

export { Header, headerAppender }
