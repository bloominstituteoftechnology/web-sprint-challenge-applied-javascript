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

  const Header = (title, date, temp) => {
    const header = document.createElement('div');
    const newDate = document.createElement('span');
    const newTitle = document.createElement('h1');
    const newTemp = document.createElement('span');
  
    header.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');
  
    header.appendChild(newDate);
    header.appendChild(newTitle);
    header.appendChild(newTemp);
  
    newDate.textContent = date;
    newTitle.textContent = title;
    newTemp.textContent = temp;
  
    return header;
  }


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = (selector) => {
    const newHeader = Header('Test Title', '1/15/20', 'Cold');
    const newSelector = document.querySelector(selector);
    newSelector.append(newHeader);
  };

export { Header, headerAppender }
