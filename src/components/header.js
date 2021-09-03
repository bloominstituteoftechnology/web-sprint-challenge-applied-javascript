import axios from "axios";

const header = document.querySelector('.header-container');

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

const headerDiv = document.createElement('div');
const divDate = document.createElement('span');
const divTitle = document.createElement('h1');
const divTemp = document.createElement('span');

headerDiv.appendChild(divDate);
headerDiv.appendChild(divTitle);
headerDiv.appendChild(divTemp);

headerDiv.classList.add('header');
divDate.classList.add('date');
divTemp.classList.add('temp');

divDate.textContent = date;
divTitle.textContent = title;
divTemp.textContent = temp;


return headerDiv
}

const headerAppender = async (selector) => {
  try {
    const resp = await axios.get(Header(date, time, temp));
    for (let i = 0; i < resp.data.message.length; i++){
      const autorimg = {imageURL: resp.data.message[i], selector: selector}
      const header = Header(resp);
      header.appendChild(Header)
    }
    } catch(err) {
      const errorText = document.createElement('p');
      errorText.textContent =  'Try again';
      document.body.appendChild(errorText);
    }
  }
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //






export { Header, headerAppender }
