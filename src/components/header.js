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

  console.log(title, date, temp)

  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  header.appendChild(dateSpan)
  header.appendChild(titleH1)
  header.appendChild(tempSpan)

  header.classList.add('header')
  dateSpan.classList.add('date')
  titleH1.classList.add('title')
  tempSpan.classList.add('temp')

  dateSpan.textContent = date
  titleH1.textContent = title
  tempSpan.textContent = temp

  console.log(header)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const domEl = document.createElement("div")
  domEl.classList.add(selector)
  return domEl.appendChild(Header("title1","2/20/2020", "52F"))
}

export { Header, headerAppender }
