// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// get the tabs and topics from index.html (outer div is tabs)
const topics = document.querySelector(".tabs .topics");
//console.log(topics)

axios.get("https://lambda-times-api.herokuapp.com/topics").then((response) => {
  //console.log response to view the structure
  console.log(response);
  // dataArr is a node list of all the data
  const dataArr = response.data.topics;
  // console.log(dataArr)

  //Iterate over the topics, and create a new tab for each
  dataArr.forEach((element) => {
    // newtab creates new element 'div', then add the classList and append to topics
    const newtab = document.createElement("div");
    newtab.classList.add("tab");
    newtab.textContent = element;
    topics.appendChild(newtab);
  });
});
