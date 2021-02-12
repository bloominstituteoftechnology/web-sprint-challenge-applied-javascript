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

  //instantiating elements
  const div_header = document.createElement('div');
  const span_date = document.createElement('span');
  const h1 = document.createElement('h1');
  const span_temp = document.createElement('span');

  //setting class names
  div_header.classList.add('header');
  span_date.classList.add('date');
  span_temp.classList.add('temp');
  
  //adding text to elements
  span_date.textContent = `${date}`;
  h1.textContent = title; 
  span_temp.textContent = temp;

  //setting element hierarchy
  div_header.appendChild(span_date);
  div_header.appendChild(h1);
  div_header.appendChild(span_temp);

  //returning markup
  return div_header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  
  //instantiating arguments for Header object
  var today = new Date().toLocaleDateString();
  const titles = "The Bitcoin Exchange";
  const temperature = "75°";

  //try to retrieve data
  try{
    //instantiating Tab object to return data
    const dataObject = Header(titles, today, temperature);
    
    //instantiating element to be added to DOM
    document.querySelector(selector).appendChild(dataObject);
  }
  //catch errors in trying
  catch(e){
    e;
  }
}

//define selector callback argument
const header = document.querySelector('.header-container');

//call headerAppender and pass in the callback
headerAppender(header);

export { Header, headerAppender }
