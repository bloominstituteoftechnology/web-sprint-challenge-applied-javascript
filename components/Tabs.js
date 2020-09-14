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

import axios from "axios";

const axiosPromise = axios.get(
  "https://lambda-times-backend.herokuapp.com/topics"
);
axiosPromise
  .then((response) => {
    /* console.log(response, "line 20 console log");
    console.log(response.data.topics, "line 21 console log");*/
    const topicsArray = response.data.topics;
    topicsArray.forEach((topics) => {
      const tab = document.createElement("div");

      tab.classList.add("tab");

      tab.textContent = topics;

      const parent = document.querySelector(".topics");

      parent.appendChild(tab);

      return tab;
    });
  })

  .catch((error) => {
    console.log(error);
  });

/*const tabsArray = response.data;
console.log(tabsArray);*/

/*function createNewTab(topic) {
    const topicTab = document.querySelector(".tab");
    topic.appendChild(topicTab);

    const tabsArray = [response.data];
    tabsArray.forEach((topic) => {
      createNewTab(topic);*/

/*const topicTab = document.querySelector(".tab");
const tab = createNewTab(response.topic);
const tabsArray = response.data;
function createNewTab(topic) {
  topicTab.appendChild(topicTab);

  return topicTab;
}

console.log(createNewTab());

tabsArray.forEach((topic) => {
  topic.appendChild(topicTab);
});
*/
