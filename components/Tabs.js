import axios from "axios";

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

// function createTabs() {
axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    const divTopics = document.querySelector("div.topics");
    const topicArr = res.data.topics;
    // console.log(topicArr);
    topicArr.forEach((x) => {
      const tab = createTab(x);
      divTopics.appendChild(tab);
    });
  })
  .catch((e) => {
    console.log(e);
  });
// }
// createTabs();

function createTab(tabname) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = tabname;

  tab.addEventListener("click", (e) => {
    const activeTab = document.querySelector("div.active-tab");
    if (activeTab !== null) {
      activeTab.classList.remove("active-tab");
    }
    e.target.classList.add("active-tab");
    // refreshCards(e.target.textContent);
  });

  

  return tab;
}

