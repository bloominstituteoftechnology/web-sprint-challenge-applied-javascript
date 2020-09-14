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
const temp = document.querySelector('.topics');
axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((result) => {
    //result is obj
    console.log(result);
    const topicsOnly = result.data.topics;
    topicsOnly.forEach((topic) => {
      temp.appendChild(makeTab(topic));
    });
  })
  .catch((err) => {
    console.log('Error found :', error);
  });

//Function makeTab def

function makeTab(tab) {
  const madeTab = document.createComment('div');
  madeTab.classList.add('tab');
  madeTab.textContent = tab;
  return madeTab;
}
