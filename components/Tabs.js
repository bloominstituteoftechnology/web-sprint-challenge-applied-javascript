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
        const card = newTabs(res.data);
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


tab.classList.add("tab");
tab1.classList.add("tab");
tab2.classList.add("tab");
tab3.classList.add("tab");
tab4.classList.add("tab");

tab.textContent = data.topics[0]
tab1.textContent = data.topics[1]
tab2.textContent = data.topics[2]
tab3.textContent = data.topics[3]
tab4.textContent = data.topics[4]

topics.appendChild(tab)
topics.appendChild(tab1)
topics.appendChild(tab2)
topics.appendChild(tab3)
topics.appendChild(tab4)

tab.addEventListener("click", () => {
    tab.classList.toggle("tab");
});
tab1.addEventListener("click", () => {
    tab1.classList.toggle("tab")
});   
tab2.addEventListener("click", () => {
    tab2.classList.toggle("tab")
});
tab3.addEventListener("click", () => {
    tab3.classList.toggle("tab")
});
tab4.addEventListener("click", () => {
    tab4.classList.toggle("tab")
});
}