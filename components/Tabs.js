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


import axios from "axios"

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then((res) => topicTab(res.data))

    .catch((err) => {
        console.log(err)
    })

const topics = document.querySelector('.topics')
function topicTab(tabs) {
    tabs.topics.map((obj) => {
        const tab = document.createElement("div");

        tab.textContent = obj;

        tab.classList.add("tab");

        topics.appendChild(tab);
    });
}




//     axios
//         .get('https://lambda-times-api.herokuapp.com/topics')
//         .then((res) => tabs(res.data))

//         .catch((error) => {
//             console.log("there is an issue", error)
//         })

// const entryPoint4 = document.querySelector('.topics')
// function tabs(info){
//     info.entryPoint4.map((obj) => {
//         const tab = document.createElement('div');

//     tab.classList.add('tab');

//     tab.textContent = obj;

//     topics.appendChild(tabs);  
//     });

// }







