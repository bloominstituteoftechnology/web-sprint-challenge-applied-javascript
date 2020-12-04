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

const { default: Axios } = require("axios");

// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = document.querySelector(".topics")
Axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then(res => {
        const card = myCard(res.data);
        topics.appendChild(card);
    })
.catch(error =>{
})
function newTabs(data) {

const tab = document.createElement("div");
const tab1 = document.createElement("div");
const tab2 = document.createElement("div");
const tab3 = document.createElement("div");
const tab4 = document.createElement("div");


tab.classList.add("javascript");
tab1.classList.add("bootstrap");
tab2.classList.add("technology");
tab3.classList.add("jquery");
tab4.classList.add("node.js");

tab.textContent = data.javascript
tab1.textContent = data.bootstrap
tab2.textContent = data.technology
tab3.textContent = data.jquery
tab4.textContent = data.nodejs

tab.appendChild(tab1)
tab1.appendChild(tab2)
tab2.appendChild(tab3)
tab3.appendChild(tab4)

tab.addEventListener("click", () => {
    tab.classList.toggle("javascript");
});
tab1.addEventListener("click", () => {
    tab1.classList.toggle("bootstrap")
});   
tab2.addEventListener("click", () => {
    tab2.classList.toggle("technology")
});
tab3.addEventListener("click", () => {
    tab3.classList.toggle("jquery")
});
tab4.addEventListener("click", () => {
    tab4.classList.toggle("node.js")
});