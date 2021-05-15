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
  // create elements
  const header = document.createElement("div");
  const date1 = document.createElement("span");
  const title1 = document.createElement("h1");
  const temp1 = document.createElement("span");
  //add style and classes
  header.classList.add("header");
  date1.classList.add("date");
  temp1.classList.add("temp");
  // add textContent
  date1.textContent = date;
  title1.textContent = title;
  temp1.textContent = temp;
  //create structure
  header.appendChild(date1);
  header.appendChild(title1);
  header.appendChild(temp1);
  // return the block
  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  // create the header
  const header = Header("Title!", "5/15/2021", "temp?");
  // append to the elt
  document.querySelector(selector).appendChild(header);
}

export { Header, headerAppender }
