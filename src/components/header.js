let header_element = document.querySelector("div-container")
const Header = (title,date,temp) => {
  const div = document.createElement("div");
  div.setAttribute("class","header");

  const span = document.createElement("span");
  span.setAttribute("class","date");
  span.textContent = date;

  const heading = document.createElement("h1");
  heading.textContent = title;

  const span2 = document.createElement("span");
  span2.setAttribute("class","temp");
  span2.textContent = temp;

  //adding span and h1 to div
  div.appendChild(span);
  div.appendChild(heading);
  div.appendChild(span2);
  //adding div to body
  document.body.appendChild(div);
   
  
}




  


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


const headerAppender = (selector) => {
  const target_element = document.querySelector(selector)
  if (target_element == null)
  throw Error(`target element ${selector} not found`)
  let header_element = document.querySelector("div.header")
  header_element = header_element.parentElement.removeChild("div.header")
  header-container.appendChild(header_element)
  
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
