// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    response.data.topics.forEach(item =>{
        holder.appendChild(maker(item));
    })
})

.catch(error => {
    console.log('not today' + error);
});
function maker(topic){
    const tab = document.createElement('div');
    tab.textContent = topic;
    tab.classList.add('tab');
    return tab;
}
const holder = document.querySelector('div.topics');