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

  const headerdiv = document.createElement("div");
  const spanDate = document.createElement("span");
  const spanTemp = document.createElement("span");
  const h1Title = document.createElement("h1");

  headerdiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  spanDate.textContent = date;
  h1Title.textContent = title;
  spanTemp.textContent = temp;


  headerdiv.appendChild(spanDate);
  headerdiv.appendChild(h1Title);
  headerdiv.appendChild(spanTemp);
  
  return headerdiv;
  
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

//   console.log(selector)
//   debugger
// const headerContainer = document.querySelector(selector)
//  console.log(headerContainer)
//   const newHeader = Header("Will", "July 13, 2019", "75");
// console.log(newHeader)
//   headerContainer.append(newHeader);
//   return headerContainer;

 // querySelector returns null


}




export { Header, headerAppender }
