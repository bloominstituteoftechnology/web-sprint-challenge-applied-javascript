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
  const divHeader = document.createElement('div');
  const spanDate = document.createElement('span');
  const titleElem = document.createElement('h1');
  const tempSpan = document.createElement('span');

  divHeader.classList.add('header');
  spanDate.classList.add('date');
  tempSpan.classList.add('temp');

  divHeader.appendChild(spanDate)
  divHeader.appendChild(titleElem)
  divHeader.appendChild(tempSpan)

  spanDate.textContent = `${date}`;
  titleElem.textContent = `${title}`;
  tempSpan.textContent = `${temp}`;

  return divHeader;
}



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
  
  const headerAppender = (selector) => {

  const injectInfo = document.querySelector(selector);
  injectInfo.appendChild(Header('Anaiz Alfonso', '12/2/2022', 'Is the best!'))

  return injectInfo
}

export { Header, headerAppender }
