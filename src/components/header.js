const Header = (title, date, temp) => {

// injecting arg

  
  let div = document.createElement("div");
  div.setAttribute("class", "header");

  let spanElement = document.createElement("span");
  spanElement.textContent = date;
  spanElement.setAttribute("class", "date");

  let h1Element = document.createElement("h1");
  h1Element.textContent = title;

  let spanTempElement = document.createElement("span");
  spanTempElement.setAttribute("class", "temp");
  spanTempElement.textContent = temp;

  div.appendChild(spanElement);
  div.appendChild(h1Element);
  div.appendChild(spanTempElement);

  return div;
  

    
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
}


const headerAppender = (selector) => {

  let targetElement = document.querySelector(selector);
  targetElement.appendChild(Header("Krystle", "Dec 26, 2021", "42°"));

  
  

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}



export { Header, headerAppender }
