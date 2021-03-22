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

  const parent = document.createElement("div");
  const sibOne = document.createElement("span");
  const sibTwo = document.createElement("h1");
  const sibThree = document.createElement("span");

  parent.textContent = header;
  sibOne.textContent = date;
  sibTwo.textContent = title;
  sibThree.textContent = time;

  parent.classList.add("header");
  sibOne.classList.add("date");
  sibThree.classList.add("temp");

  parent.appendChild(sibOne);
  parent.appendChild(sibTwo);
  parent.appendChild(sibThree);

  return parent;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

headerAppender.appendChild(selector);

export { Header, headerAppender };
