//  TASK 1 - Implement this function taking `title`, `date` and `temp` as its 3 arguments and returning the markup below.  
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



// // This all goes in step 2, I think...
// // Appends function to the DOM. 
// const testFunc = Header('IM TITLE!', 'IM DATE', 'IM TEMP'); // Does not have to be stored in a variable. 
// const headerContainer = document.querySelector('.header-container');
// headerContainer.appendChild(testFunc); 

// Testing the Header function in the console. 
// console.log(Header('IM TITLE!', 'IM DATE', 'IM TEMP')); // WORKS IN CONSOLE PERFECTLY. 

// _______________________________________________

// TASK 2
// This function takes a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.


const Header = (title, date, temp) => {
  // Creating elements. With indentation for clarity.
  const headerDIV = document.createElement('div')
    const dateSPAN = document.createElement('span')
    const titleH1 = document.createElement('h1')
    const tempSPAN = document.createElement('span')
  // Adding class names.
  headerDIV.classList.add('header')
  dateSPAN.classList.add('date')
  tempSPAN.classList.add('temp')
  // Adding content.
  dateSPAN.textContent = date;
  titleH1.textContent = title;
  tempSPAN.textContent = temp;
  // Appending.
  headerDIV.appendChild(dateSPAN)
  headerDIV.appendChild(titleH1)
  headerDIV.appendChild(tempSPAN)
  // Return parent.
  return headerDIV;   
}

const headerAppender = (selector) => {
  const headerComponent = Header('Lambda Times', 'May 15, 2021', '88 degrees')
  const selectANDappend = document.querySelector(selector).appendChild(headerComponent); 
  return selectANDappend;
}

// Used for testing, had to comment out because of CodeGrade
// const mountPoint = document.querySelector('.header-container')

// CODEGRADE FAILS WITH IF YOU INVOKE!
// headerAppender(mountPoint) 
// console.log(headerAppender(mountPoint)) 














// Lamba did this! Not exactly sure why.
export { Header, headerAppender }
