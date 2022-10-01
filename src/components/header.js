const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const heading1 = document.createElement('h1');
  const span2 = document.createElement('span');
  

  headerDiv.classList.add('header');
  spanDate.classList.add('date');
  span2.classList.add('temp');

  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(heading1);
  headerDiv.appendChild(span2);

  heading1.textContent = title;
  spanDate.textContent = date;
  span2.textContent = temp;

return headerDiv

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const selectorDate = document.querySelector(selector);
  selectorDate.appendChild(Header(
    'Lambda Times', 'December 3, 2021', '32°F'
  ))


}


export { Header, headerAppender }
