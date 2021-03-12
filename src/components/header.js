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

  // return `<div class="header">
  //   <span class="date">${ date }</span>
  //   <h1>${ title }</h1>
  //   <span class="temp">${ temp }</span>
  // </div>`

  let headerDiv = document.createElement('div');
  let dateSpan = document.createElement('span');
  let pageTitle = document.createElement('h1');
  let tempSpan = document.createElement('span');

  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  dateSpan.textContent = date;
  pageTitle.textContent = title;
  tempSpan.textContent = temp;

  // append header to body
  // append elements to the header div
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(pageTitle);
  headerDiv.appendChild(tempSpan);
  // headerDiv.append(dateSpan, pageTitle, tempSpan);

  // console.log(headerDiv)
  return headerDiv

};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // COME BACK TO THIS ONE

  const header = document.querySelector(selector);

  const headerDiv = Header('Lambda Times','January 6, 2021','26°') // we don't have the arguments to fill in for the component though?
  header.appendChild(headerDiv)  
};

export { Header, headerAppender }
