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
const tabTops = document.querySelector(".topics");

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then((response) => {
       response.data.topics.forEach((item) => {
            console.log(item);
            tabTops.appendChild(createTab(item));
        })
        console.log(response);
    })
    .catch((error) => {
        console.log("It broke?... It broke.");
        console.log(error);
      })

  function createTab(object){
    const div = document.createElement("div");
    div.classList.add("tab");
    div.innerHTML = object;
    return div;
};