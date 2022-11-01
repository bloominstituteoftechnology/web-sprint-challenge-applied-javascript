// const div1 = document.createElement('div')
// const span1 = document.createElement('span')
// const h1t = document.createElement('h1')
// const span2 = document.createElement('span')
// div1.classList.add('header')
// span1.classList.add('date')
// h1t.classList.add('title')
// span2.classList.add('temp')
// console.log(div1);
// div1.append(span1,h1t,span2)
// const ns1 = document.querySelector('date')
// const ns2 = document.querySelector('temp')
// const ht = docuemnt.querySelector('date')
// span1.textContent = date

const Header = (title, date, temp) => {
  const div1 = document.createElement('div')
  const span1 = document.createElement('span')
  const h1t = document.createElement('h1')
  const span2 = document.createElement('span')
  div1.classList.add('header')
  span1.classList.add('date')
  span1.textContent = `${date}`;
  h1t.classList.add('title')
  h1t.textContent = `${title}`;
  span2.classList.add('temp')
  span2.textContent = `${temp}`;
  div1.append(span1,h1t,span2)
  
  return div1;


  

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
// Header('day of the dead', '10/12/22', 102);


const headerAppender = (selector) => {
const toadd = document.querySelector(selector);
toadd.appendChild(Header('wise man fears','11/1/22','500 degrees'))
return toadd;


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
