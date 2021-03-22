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
  const entry = document.querySelector(`header`)
  const date = document.createElement('span')
  date.textContent= Date;
  const title = document.createElement('h1')
  title.textContent='Lambda Times'
  const temp = document.createElement('span')
  temp.textContent= tempreture

  return header

}

const headerAppender = (selector) => {

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 entry.appendChild(header)
 date.appendChild(date)
 title.appendChild(title)
 temp.appendChild(temp)

  return headerAppender
}

export { Header, headerAppender }
