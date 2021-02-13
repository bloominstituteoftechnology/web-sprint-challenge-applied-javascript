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
  const headerDiv = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleH1);
  headerDiv.appendChild(tempSpan);

  headerDiv.classList.add('header');
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp');

  dateSpan.textContent = `${date}`;
  titleH1.textContent = `${title}`;
  tempSpan.textContent = `${temp}`;

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entrypoint = document.querySelector(`${selector}`)
  let todayDate = new Date ()
  let dd = String(todayDate.getDate()).padStart(2, '0');
  let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = todayDate.getFullYear();
  let temperature = '32';
  let heading = "It's a chilly one!"
  todayDate = `${mm}/${dd}/${yyyy}`

  entrypoint.appendChild(Header(heading, todayDate, temperature))
}

export { Header, headerAppender }
