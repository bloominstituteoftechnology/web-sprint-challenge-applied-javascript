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
import axios from 'axios'

let tab = document.querySelector('div.topics')

axios.get('https://lambda-times-api.herokuapp.com/topics')
.then( response => {
    // Remember response is an object, response.data is an array.
    response.data.topics.forEach(element => {
        let tabDiv = document.createElement('div')
        tabDiv.classList.add('tab')
        tabDiv.innerText = element
        tab.append(tabDiv)
    });
})
