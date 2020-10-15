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

const makeTopics = document.querySelector(".topics");
const makeTabs = (data) => {
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  newTab.textContent = data;

  return newTab;
}

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((response) => { //asyncronous code-will wait until later to run
    response.data.topics.forEach(data => { //calls a function once for each element in an array, in order. 
      makeTopics.appendChild(makeTabs(data));
      console.log(data);
    })
  })
  .catch((err) => {
    console.log("error", err);
  });

