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
  // Instantiating elements
  const container = document.createElement('div')
  const day = document.createElement('span')
  const header = document.createElement('h1')
  const temperature = document.createElement('span')
  // Adding classes to elements
  container.classList.add('header')
  day.classList.add('date')
  temperature.classList.add('temp')
  // Setting up structure of elements
  container.appendChild(day) 
  container.appendChild(header)
  container.appendChild(temperature) 
  // Adding content
  day.textContent = date
  header.textContent = title
  temperature.textContent = temp
  // Return product
  return container
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
