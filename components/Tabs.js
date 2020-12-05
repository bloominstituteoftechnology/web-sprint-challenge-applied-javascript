// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics

const tabEntry = document.querySelector(".topics");

axios.get("https://lambda-times-api.herokuapp.com/topics").then((res) => {
  // console.log(res.data.topics);
  res.data.topics.forEach((item) => {
    // console.log(item);
    const newTab = tabComponent(item);
    tabEntry.appendChild(newTab);
  });
});

// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function tabComponent(topic) {
  const tabDiv = document.createElement("div");
  tabDiv.classList.add("tab");
  tabDiv.textContent = `${topic}`; //topic.topics[];
  //backticks because i need to create the topic by fetching the items from their server using Axios.
  //don't append this inside function because it needs to go inside the class in html so needs done after function is created.
  return tabDiv;
}
