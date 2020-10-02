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



function getDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  let month;
  switch (mm) {
    case "00": 
      month = null;
      break;
    case "01": 
      month = "January";
      break;
    case "02": 
      month = "February";
      break;
    case "03": 
      month = "March";
      break;
    case "04": 
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
    default: 
      month = "Unknown";
  }
  const yyyy = String(today.getFullYear());
  const datestring = `${month} ${dd}, ${yyyy}`;
  return datestring;
}


function Header() {
  // instantiate elements
  const header = document.createElement("div");
    const date = document.createElement("span");
    const titleH1 = document.createElement("h1");
    const temperature = document.createElement("span");
  
  // structure elements
  header.append(date, titleH1, temperature);


  // class names
  header.classList.add("header");
  date.classList.add("date");
  date.textContent = getDate();
  titleH1.textContent = "Lambda Times";
  temperature.classList.add("temp");
  temperature.textContent = "98°";

  return header;

}

document.querySelector("div.header-container").appendChild(Header());
