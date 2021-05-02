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

  const divHeader = document.createElement('div'), //the , is important here
        spanDate = document.createElement('span'),
        h1Title = document.createElement('h1'),
        spanTemp = document.createElement('span');

  divHeader.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  spanDate.textContent = date;
  h1Title.textContent= title;
  spanTemp.textContent = temp;

  divHeader.appendChild(spanDate);
  divHeader.appendChild(h1Title);
  divHeader.appendChild(spanTemp);

  return divHeader;
}

const headerAppender = (selector) => { //e.g. p, #para1 and .center
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.

  let headerAppended = document.querySelector(selector);
  headerAppended.appendChild(Header("Stonks this summer", {Date : "June 26", two: '2'}, ['what', 'is', 'temp?']));

  return headerAppended
}

export { Header, headerAppender }


