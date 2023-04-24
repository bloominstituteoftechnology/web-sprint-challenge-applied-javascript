  const Header = (title, date, temp) => {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
  
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = date;
  
    const titleH1 = document.createElement('h1');
    titleH1.textContent = title;
  
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = temp;
  
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(tempSpan);
  
    return headerDiv;

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
}

const headerAppender = (selector) => {
  const header = Header('BloomTech News', 'April 22, 2023', 'Sprint 5');
  document.querySelector(selector).appendChild(header);
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
}

export { Header, headerAppender }
