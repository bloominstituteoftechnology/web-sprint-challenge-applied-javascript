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

const axiosPrime = axios.get('https://lambda-times-backend.herokuapp.com/topics');

axiosPrime
.then(response => {

const tabCreate = (obj) => {
    obj.forEach(element => {
        const divTab = document.createElement('div');
        divTab.classList.add('tab');
        divTab.textContent = element;

        const tabInfo = document.querySelector('.topics');
        tabInfo.appendChild(divTab)
        return divTab;
        
    });
}
const infoTabNew = response.data['topics'];
console.log(infoTabNew);

const filled = tabCreate(infoTabNew);
return filled;
})

.catch( error => {
    console.log('error')
    return error;
    
})


//// not done 