const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
const header = document.createElement('div')
const headTitle = document.createElement('h1');
const headDate = document.createElement('span');
const headTemp = document.createElement('span');

header.appendChild(headTitle)
header.appendChild(headDate)
header.appendChild(headTemp)

headTitle.textContent = title
headDate.textContent = date
headTemp.textContent = temp


  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  return header
  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const mainHeader = document.querySelector('.header-container')

  Header().classList.add(selector)
 
  mainHeader.appendChild(headerAppender())
}

export { Header, headerAppender }
