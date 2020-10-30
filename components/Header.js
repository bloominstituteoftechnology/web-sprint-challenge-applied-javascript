// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector(".header-container");

let header = (date, title, temp) => {
  const head = document.createElement("div");
  const dates = document.createElement("span");
  const titles = document.createElement("h1");
  const temps = document.createElement("span");

  //appendchild

  headerContainer.appendChild(head);
  head.appendChild(dates);
  head.appendChild(titles);
  head.appendChild(temps);

  //create class

  head.classList.add("header");
  dates.classList.add("date");
  temps.classList.add("temp");

  //content

  dates.textContent = date;
  titles.textContent = title;
  temps.textContent = temp;

  //return

  return head;
};
header("october 30, 2020", "Lambda Times", "65 degrees");
