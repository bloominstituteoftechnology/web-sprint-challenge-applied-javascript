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

// import 'axios'from 'axios'
// import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(function (response) {

        // Gets the parent element and all the topic names
        const parent = document.querySelector('div.topics')
        const data = response.data['topics']

        for (let i = 0; i < data.length; i++) {
            const curTab = document.createElement('div')
            curTab.textContent = data[i]
            curTab.className = 'tab'
            parent.appendChild(curTab)
        }
    })
    .catch(function (error) {
        console.log('error')
    })