
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
  const mainDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const divH1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  mainDiv.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent= date;
  divH1.textContent= title;
  tempSpan.textContent = temp;

  mainDiv.appendChild(dateSpan)
  mainDiv.appendChild(divH1)
  mainDiv.appendChild(tempSpan)

  return mainDiv
}


// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//
const headerAppender = (selector) => {
  
  const headerAppend = document.querySelector(selector)
  headerAppend.appendChild(Header("Steve's Weekly News", "June 2021", "92°F"))
  
  return headerAppend
}
export { Header, headerAppender }
