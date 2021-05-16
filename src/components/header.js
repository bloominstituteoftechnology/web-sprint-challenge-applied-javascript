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
  let mainDiv = document.createElement("div")
      mainDiv.classList.add("header")
  let firstSpan = document.createElement("span")
      firstSpan.classList.add("date")
      firstSpan.textContent = date;
      mainDiv.appendChild(firstSpan);
  let  firstH1 = document.createElement("h1");
       firstH1.textContent = title
        document.createElement("span")
        mainDiv.appendChild(firsH1);
  let  secondSpan = document.createElement("span");
       secondSpan.classList.add("temp")
       mainDiv.appendChild(secondSpan)
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  selector.appendChild(Header)
}

export { Header, headerAppender }
